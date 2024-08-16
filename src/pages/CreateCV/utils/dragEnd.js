export const handleDragEnd = (result, key, cvData, setCvData) => {
  if (!result.destination) return;

  const reorderedItems = Array.from(cvData[key]);
  const [movedItem] = reorderedItems.splice(result.source.index, 1);
  reorderedItems.splice(result.destination.index, 0, movedItem);

  setCvData((prevData) => ({
    ...prevData,
    [key]: reorderedItems,
  }));
};
