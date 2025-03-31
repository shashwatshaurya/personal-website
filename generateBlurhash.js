const { encode } = require("blurhash");
const fs = require("fs");
const path = require("path");
const { loadImage, createCanvas } = require("canvas");

const imagesRepo = path.resolve(__dirname + "/src/assets/images");
const hashMapConstant = path.resolve(
  __dirname + "/src/common/blurhashConstants.json"
);

const getImageData = async (imageBuffer) => {
  try {
    const image = await loadImage(imageBuffer);

    const width = Math.floor(image.width);
    const height = Math.floor(image.height);

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, width, height);
    const imageData = ctx.getImageData(0, 0, width, height).data;

    return {
      data: imageData,
      width,
      height,
    };
  } catch (error) {
    throw error;
  }
};

const generateBlurhash = async (imageUrl) => {
  try {
    const imageBuffer = fs.readFileSync(imageUrl);

    const imageData = await getImageData(imageBuffer);
    const hash = encode(
      imageData.data,
      imageData.width,
      imageData.height,
      4,
      3
    );
    return hash;
  } catch (error) {
    throw error;
  }
};

const getImages = async (dirName) => {
  try {
    const files = await fs.promises.readdir(dirName);
    const images = files.filter((file) => {
      return file.endsWith(".jpg") || file.endsWith(".png");
    });

    return images.map((image) => {
      return {
        name: image,
        url: path.resolve(dirName + "/" + image),
      };
    });
  } catch (error) {
    throw error;
  }
};

const writeHashesToFile = async (hashmap, fileLocation) => {
    try {
        const data = JSON.stringify(hashmap, null, 2);
        await fs.promises.writeFile(fileLocation, data);
        return;
    } catch (error) {
        throw error;
    }
};

const main = async () => {
  try {
    const images = await getImages(imagesRepo);
    const hashmap = {};

    for (const image of images) {
      const hash = await generateBlurhash(image.url);
      hashmap[image.name] = hash;
    }

    await writeHashesToFile(hashmap, hashMapConstant);
  } catch (error) {
    console.error(error);
  }
};

main();
