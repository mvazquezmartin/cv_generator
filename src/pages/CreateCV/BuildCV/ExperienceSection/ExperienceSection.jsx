import { useTranslation } from 'react-i18next';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { SVG_delete, SVG_moveIcon, SVG_plus } from '@/assets/svg';
import { handleDragEnd } from '@/pages/CreateCV/BuildCV/utils/dragEnd';
import {
  handleDateChange,
  handleFieldChange,
  handleTaskChange,
} from '@/pages/CreateCV/BuildCV/utils/handleChange';
import { useContext } from 'react';
import { CVContext } from '@/context/CVContext';
import { EditableField } from '@/pages/CreateCV/BuildCV/EditableField/EditableField';

export const ExperienceSection = ({ cvData }) => {
  const { setCvData, removeExperience, addExperience, addTask } =
    useContext(CVContext);
  const { t } = useTranslation();

  return (
    <div className="experiences-container">
      <p className="subtitle">{t('cv.experience')}</p>
      <DragDropContext
        onDragEnd={(result) =>
          handleDragEnd(result, 'experiences', cvData, setCvData)
        }
      >
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
                      <div {...provided.dragHandleProps} className="btn-move">
                        <SVG_moveIcon />
                      </div>
                      <div className="experience-header">
                        <EditableField
                          value={experience.company}
                          onChange={(newCompany) =>
                            handleFieldChange(
                              'experiences',
                              index,
                              'company',
                              newCompany,
                              setCvData
                            )
                          }
                        />
                        <EditableField
                          value={experience.location}
                          onChange={(newLocation) =>
                            handleFieldChange(
                              'experiences',
                              index,
                              'location',
                              newLocation,
                              setCvData
                            )
                          }
                        />
                      </div>
                      <div className="experience-details">
                        <EditableField
                          value={experience.position}
                          onChange={(newPosition) =>
                            handleFieldChange(
                              'experiences',
                              index,
                              'position',
                              newPosition,
                              setCvData
                            )
                          }
                        />
                        <EditableField
                          value={`${experience.startDate} - ${experience.endDate}`}
                          onChange={(newDates) =>
                            handleDateChange(newDates, index, setCvData)
                          }
                        />
                      </div>
                      <div className="experience-task">
                        {experience.tasks.map((task, taskIndex) => (
                          <EditableField
                            key={taskIndex}
                            value={task}
                            btn_delete={true}
                            experienceIndex={index}
                            taskIndex={taskIndex}
                            onChange={(newTask) =>
                              handleTaskChange(
                                newTask,
                                index,
                                taskIndex,
                                setCvData
                              )
                            }
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
  );
};
