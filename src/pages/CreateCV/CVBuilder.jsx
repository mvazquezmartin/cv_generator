import { Fragment, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { CVContext } from '@/context/CVContext';
import { Header } from '@/components/Header/Header';
import { EditableField } from '@/pages/CreateCV/EditableField';
import { SVG_moveIcon, SVG_delete, SVG_plus } from '@/assets/svg';
import './CVBuilder.css';

export const CVBuilder = () => {
  const { cvData, setCvData } = useContext(CVContext);
  const { t } = useTranslation();

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedExperiences = Array.from(cvData.experiences);
    const [movedExperience] = reorderedExperiences.splice(
      result.source.index,
      1
    );
    reorderedExperiences.splice(result.destination.index, 0, movedExperience);

    setCvData((prevData) => ({
      ...prevData,
      experiences: reorderedExperiences,
    }));
  };

  const handleContactChange = (field, value) => {
    setCvData((prevData) => ({
      ...prevData,
      contact: {
        ...prevData.contact,
        [field]: value,
      },
    }));
  };

  const addExperience = () => {
    setCvData((prevData) => ({
      ...prevData,
      experiences: [
        ...prevData.experiences,
        {
          id: uuidv4(),
          company: t('cv_builder.defaultCompany'),
          location: t('cv_builder.defaultLocation'),
          position: t('cv_builder.defaultPosition'),
          startDate: t('cv_builder.defaultStartDate'),
          endDate: t('cv_builder.defaultEndDate'),
          tasks: [t('cv_builder.defaultTask1'), t('cv_builder.defaultTask2')],
        },
      ],
    }));
  };

  const removeExperience = (id) => {
    setCvData((prevData) => ({
      ...prevData,
      experiences: prevData.experiences.filter(
        (experience) => experience.id !== id
      ),
    }));
  };

  const addTask = (experienceIndex) => {
    setCvData((prevData) => {
      const newExperiences = [...prevData.experiences];
      newExperiences[experienceIndex].tasks.push('- ');
      return {
        ...prevData,
        experiences: newExperiences,
      };
    });
  };

  const onEducationDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedEducation = Array.from(cvData.education);
    const [movedEducation] = reorderedEducation.splice(result.source.index, 1);
    reorderedEducation.splice(result.destination.index, 0, movedEducation);

    setCvData((prevData) => ({
      ...prevData,
      education: reorderedEducation,
    }));
  };

  const addEducation = () => {
    setCvData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        {
          id: uuidv4(),
          institution: t('cv_builder.defaultInstitution'),
          location: t('cv_builder.defaultEducationLocation'),
          title: t('cv_builder.defaultTitle'),
          date: t('cv_builder.defaultDate'),
        },
      ],
    }));
  };

  const removeEducation = (id) => {
    setCvData((prevData) => ({
      ...prevData,
      education: prevData.education.filter((education) => education.id !== id),
    }));
  };

  const onSkillsDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedSkills = Array.from(cvData.skills);
    const [movedSkill] = reorderedSkills.splice(result.source.index, 1);
    reorderedSkills.splice(result.destination.index, 0, movedSkill);

    setCvData((prevData) => ({
      ...prevData,
      skills: reorderedSkills,
    }));
  };

  const addSkill = () => {
    setCvData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, t('cv_builder.defaultSkill')],
    }));
  };

  const removeSkill = (index) => {
    setCvData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((_, skillIndex) => skillIndex !== index),
    }));
  };

  return (
    <>
      <Header
        showBtn={false}
        name={cvData.name}
        contact={cvData.contact}
        description={cvData.description}
        experiences={cvData.experiences}
        education={cvData.education}
        skills={cvData.skills}
        fixed={true}
      />
      <div className="cv-builder-container">
        <div className="cv-builder">
          <div className="title-name">
            <EditableField
              value={cvData.name}
              onChange={(name) =>
                setCvData((prevData) => ({ ...prevData, name }))
              }
            />
            <EditableField
              value={cvData.position}
              onChange={(position) =>
                setCvData((prevData) => ({ ...prevData, position }))
              }
            />
          </div>

          <div className="contact-container">
            {Object.keys(cvData.contact).map((key, index) => (
              <Fragment key={key}>
                <EditableField
                  value={cvData.contact[key]}
                  onChange={(value) => handleContactChange(key, value)}
                  className="contact"
                />
                {index < Object.keys(cvData.contact).length - 1 && '·'}
              </Fragment>
            ))}
          </div>
          <div className="divider-line"></div>
          <div className="description-container">
            <EditableField
              value={cvData.description}
              onChange={(description) =>
                setCvData((prevData) => ({ ...prevData, description }))
              }
            />
          </div>
          <div className="experiences-container">
            <p className="subtitle">{t('cv.experience')}</p>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="experiences">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="experience-dnd"
                  >
                    {cvData.experiences.map((experience, index) => (
                      <Draggable
                        key={experience.id}
                        draggableId={experience.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className="experience-card"
                          >
                            <div
                              {...provided.dragHandleProps}
                              className="btn-move"
                            >
                              <SVG_moveIcon />
                            </div>
                            <div className="experience-header">
                              <EditableField
                                value={experience.company}
                                onChange={(newCompany) => {
                                  setCvData((prevData) => {
                                    const newExperiences = [
                                      ...prevData.experiences,
                                    ];
                                    newExperiences[index].company = newCompany;
                                    return {
                                      ...prevData,
                                      experiences: newExperiences,
                                    };
                                  });
                                }}
                              />
                              <EditableField
                                value={experience.location}
                                onChange={(newLocation) => {
                                  setCvData((prevData) => {
                                    const newExperiences = [
                                      ...prevData.experiences,
                                    ];
                                    newExperiences[index].location =
                                      newLocation;
                                    return {
                                      ...prevData,
                                      experiences: newExperiences,
                                    };
                                  });
                                }}
                              />
                            </div>
                            <div className="experience-details">
                              <EditableField
                                value={experience.position}
                                onChange={(newPosition) => {
                                  setCvData((prevData) => {
                                    const newExperiences = [
                                      ...prevData.experiences,
                                    ];
                                    newExperiences[index].position =
                                      newPosition;
                                    return {
                                      ...prevData,
                                      experiences: newExperiences,
                                    };
                                  });
                                }}
                              />
                              <EditableField
                                value={`${experience.startDate} - ${experience.endDate}`}
                                onChange={(newDates) => {
                                  const [newStartDate, newEndDate] =
                                    newDates.split(' - ');
                                  setCvData((prevData) => {
                                    const newExperiences = [
                                      ...prevData.experiences,
                                    ];
                                    newExperiences[index].startDate =
                                      newStartDate;
                                    newExperiences[index].endDate = newEndDate;
                                    return {
                                      ...prevData,
                                      experiences: newExperiences,
                                    };
                                  });
                                }}
                              />
                            </div>
                            <div className="experience-task">
                              {experience.tasks
                                .filter((task) => task.trim() !== '')
                                .map((task, taskIndex) => (
                                  <EditableField
                                    key={taskIndex}
                                    value={task}
                                    onChange={(newTask) => {
                                      setCvData((prevData) => {
                                        const newExperiences = [
                                          ...prevData.experiences,
                                        ];
                                        newExperiences[index].tasks[taskIndex] =
                                          newTask;
                                        return {
                                          ...prevData,
                                          experiences: newExperiences,
                                        };
                                      });
                                    }}
                                    onEnter={() => addTask(index)}
                                  />
                                ))}
                            </div>
                            <button
                              onClick={() => removeExperience(experience.id)}
                              className="btn-delete"
                            >
                              <SVG_delete />
                            </button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <button onClick={addExperience} className="btn-add">
              <SVG_plus />
            </button>
          </div>
          <div className="education-container">
            <p className="subtitle">{t('cv.education')}</p>
            <DragDropContext onDragEnd={onEducationDragEnd}>
              <Droppable droppableId="education">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="education-dnd"
                  >
                    {cvData.education.map((education, index) => (
                      <Draggable
                        key={education.id}
                        draggableId={education.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className="education-card"
                          >
                            <div
                              {...provided.dragHandleProps}
                              className="btn-move"
                            >
                              <SVG_moveIcon />
                            </div>
                            <div className="education-header">
                              <EditableField
                                value={education.institution}
                                onChange={(newInstitution) => {
                                  setCvData((prevData) => {
                                    const newEducation = [
                                      ...prevData.education,
                                    ];
                                    newEducation[index].institution =
                                      newInstitution;
                                    return {
                                      ...prevData,
                                      education: newEducation,
                                    };
                                  });
                                }}
                              />
                              <EditableField
                                value={education.location}
                                onChange={(newLocation) => {
                                  setCvData((prevData) => {
                                    const newEducation = [
                                      ...prevData.education,
                                    ];
                                    newEducation[index].location = newLocation;
                                    return {
                                      ...prevData,
                                      education: newEducation,
                                    };
                                  });
                                }}
                              />
                            </div>
                            <div className="education-detail">
                              <EditableField
                                value={education.title}
                                onChange={(newTitle) => {
                                  setCvData((prevData) => {
                                    const newEducation = [
                                      ...prevData.education,
                                    ];
                                    newEducation[index].title = newTitle;
                                    return {
                                      ...prevData,
                                      education: newEducation,
                                    };
                                  });
                                }}
                              />
                              <EditableField
                                value={education.date}
                                onChange={(newDate) => {
                                  setCvData((prevData) => {
                                    const newEducation = [
                                      ...prevData.education,
                                    ];
                                    newEducation[index].date = newDate;
                                    return {
                                      ...prevData,
                                      education: newEducation,
                                    };
                                  });
                                }}
                              />
                            </div>
                            <button
                              onClick={() => removeEducation(education.id)}
                              className="btn-delete"
                            >
                              <SVG_delete />
                            </button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <button onClick={addEducation} className="btn-add">
              <SVG_plus />
            </button>
          </div>
          <div className="skills-container">
            <p className="subtitle">{t('cv.skills')}</p>
            <DragDropContext onDragEnd={onSkillsDragEnd}>
              <Droppable droppableId="skills">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="skills-dnd"
                  >
                    {cvData.skills.map((skill, index) => (
                      <Draggable
                        key={index}
                        draggableId={index.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className="skill-card"
                          >
                            <div
                              {...provided.dragHandleProps}
                              className="btn-move"
                            >
                              <SVG_moveIcon />
                            </div>
                            <EditableField
                              value={skill}
                              onChange={(newSkill) => {
                                setCvData((prevData) => {
                                  const newSkills = [...prevData.skills];
                                  newSkills[index] = newSkill;
                                  return {
                                    ...prevData,
                                    skills: newSkills,
                                  };
                                });
                              }}
                            />
                            <button
                              onClick={() => removeSkill(index)}
                              className="btn-delete"
                            >
                              <SVG_delete />
                            </button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <button onClick={addSkill} className="btn-add">
              <SVG_plus />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
