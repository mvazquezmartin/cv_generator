const handleFieldChange = (section, index, field, value, setCvData) => {
  setCvData((prevData) => {
    const newSection = [...prevData[section]];
    newSection[index][field] = value;
    return { ...prevData, [section]: newSection };
  });
};

const handleDateChange = (newDates, index, setCvData) => {
  const [newStartDate, newEndDate] = newDates.split(' - ');
  setCvData((prevData) => {
    const newExperiences = [...prevData.experiences];
    newExperiences[index].startDate = newStartDate;
    newExperiences[index].endDate = newEndDate;
    return { ...prevData, experiences: newExperiences };
  });
};

const handleTaskChange = (newTask, index, taskIndex, setCvData) => {
  setCvData((prevData) => {
    const newExperiences = [...prevData.experiences];
    newExperiences[index].tasks[taskIndex] = newTask;
    return { ...prevData, experiences: newExperiences };
  });
};

export { handleDateChange, handleFieldChange, handleTaskChange };
