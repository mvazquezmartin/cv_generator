import { useContext } from 'react';
import { CVContext } from '@/context/CVContext';
import { handleDragEnd } from '@/pages/CreateCV/utils/dragEnd';
import { SVG_delete, SVG_moveIcon, SVG_plus } from '@/assets/svg';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { handleFieldChange } from '@/pages/CreateCV/utils/handleChange';
import { useTranslation } from 'react-i18next';
import { EditableField } from '@/pages/CreateCV/EditableField/EditableField';

export const EducationSection = ({ cvData }) => {
  const { setCvData, addEducation, removeEducation } = useContext(CVContext);
  const { t } = useTranslation();

  return (
    <div className="education-container">
      <p className="subtitle">{t('cv.education')}</p>
      <DragDropContext
        onDragEnd={(result) =>
          handleDragEnd(result, 'education', cvData, setCvData)
        }
      >
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
                        aria-label="move button"
                      >
                        <SVG_moveIcon />
                      </div>
                      <div className="education-header">
                        <EditableField
                          value={education.institution}
                          onChange={(newInstitution) =>
                            handleFieldChange(
                              'education',
                              index,
                              'institution',
                              newInstitution,
                              setCvData
                            )
                          }
                        />
                        <EditableField
                          value={education.location}
                          onChange={(newLocation) =>
                            handleFieldChange(
                              'education',
                              index,
                              'location',
                              newLocation,
                              setCvData
                            )
                          }
                        />
                      </div>
                      <div className="education-detail">
                        <EditableField
                          value={education.title}
                          onChange={(newTitle) =>
                            handleFieldChange(
                              'education',
                              index,
                              'title',
                              newTitle,
                              setCvData
                            )
                          }
                        />
                        <EditableField
                          value={education.date}
                          onChange={(newDate) =>
                            handleFieldChange(
                              'education',
                              index,
                              'date',
                              newDate,
                              setCvData
                            )
                          }
                        />
                      </div>
                      <button
                        onClick={() => removeEducation(education.id)}
                        className="btn-delete"
                        aria-label="delete button"
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
      <button
        onClick={addEducation}
        className="btn-add"
        aria-label="add button"
      >
        <SVG_plus />
      </button>
    </div>
  );
};
