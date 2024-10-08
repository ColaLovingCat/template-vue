//@ts-ignore
const modulesFiles = import.meta.globEager("./*/*.vue");

const modules: { [key: string]: any } = {};
for (const key in modulesFiles) {
  const moduleName = key.replace(/(.*\/)*([^.]+).*/gi, "$2");
  const value = modulesFiles[key];
  modules[moduleName] = value.default;
}

// console.log(666, modules);
export default modules;
