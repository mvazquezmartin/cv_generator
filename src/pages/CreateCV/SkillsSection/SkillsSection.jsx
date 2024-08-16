import { useContext } from 'react';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { useTranslation } from 'react-i18next';
import { CVContext } from '@/context/CVContext';
import { SVG_delete, SVG_moveIcon, SVG_plus } from '@/assets/svg';
import { EditableField } from '@/pages/CreateCV/EditableField/EditableField';
import { handleDragEnd } from '@/pages/CreateCV/utils/dragEnd';

export const SkillsSection = ({ cvData }) => {
  const { setCvData, addSkill, removeSkill } = useContext(CVContext);
  const { t } = useTranslation();

  return (
    <div className="skills-container">
      <p className="subtitle">{t('cv.skills')}</p>
      <DragDropContext
        onDragEnd={(result) =>
          handleDragEnd(result, 'skills', cvData, setCvData)
        }
      >
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
                      <div {...provided.dragHandleProps} className="btn-move">
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
  );
};
