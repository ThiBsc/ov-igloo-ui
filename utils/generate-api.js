import path from 'path';
import fs from 'fs';

// For some reason, react-docgen-typescript has to be imported synchronously
const docgen = require('react-docgen-typescript');

const options = {
  propFilter: (prop) => {
    if (prop.declarations !== undefined && prop.declarations.length > 0) {
      const hasPropAdditionalDescription = prop.declarations.find(
        (declaration) => {
          return !declaration.fileName.includes('node_modules');
        }
      );

      return Boolean(hasPropAdditionalDescription);
    }

    return true;
  },
};

export async function getComponentAPI(source) {
  const componentFiles = fs.readdirSync(source).filter((name) => {
    const stats = fs.statSync(path.join(source, name));
    return !stats.isDirectory();
  });

  const ignoreFiles = ['Toast', 'ButtonGroupItem'];

  const filterFiles = componentFiles.filter((file) => {
    const matchPattern = /[A-Z]\w*.tsx$/.test(file);

    if (matchPattern) {
      const filename = file.replace(/\.[^/.]+$/, '');
      return !ignoreFiles.includes(filename);
    } else {
      return false;
    }
  });

  return await Promise.all(
    filterFiles.map(async (name) => {
      const filePath = path.join(source, name);
      try {
        return docgen.parse(filePath, options);
      } catch (error) {
        console.error('There was an error parsing component api', error);
        return [];
      }
    })
  );
}
