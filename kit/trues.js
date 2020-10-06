export default (targets, mode) => Object.keys(targets).filter(key => targets[key] === mode);
