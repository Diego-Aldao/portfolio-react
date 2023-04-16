function comparar(objectoA, objectoB) {
  if (objectoA.año > objectoB.año) {
    return -1;
  }
  if (objectoA.año < objectoB.año) {
    return 1;
  }
  return 0;
}

export default comparar;
