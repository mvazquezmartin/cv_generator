import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Header } from '@/components/Header/Header';
import { EditableField } from '@/pages/CreateCV/EditableField';
import { SVG_moveIcon, SVG_delete } from '@/assets/svg';

export const CVBuilder = () => {
  const [name, setName] = useState('Nombre del Usuario');
  const [contact, setContact] = useState('Contacto del Usuario');
  const [experiences, setExperiences] = useState([
    { id: uuidv4(), title: 'Trabajo 1', tasks: ['función 1', 'función 2'] },
    { id: uuidv4(), title: 'Trabajo 2', tasks: ['función 3', 'función 4'] },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedExperiences = Array.from(experiences);
    const [movedExperience] = reorderedExperiences.splice(
      result.source.index,
      1
    );
    reorderedExperiences.splice(result.destination.index, 0, movedExperience);

    setExperiences(reorderedExperiences);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      { id: uuidv4(), title: 'Nuevo Trabajo', tasks: ['Nueva función 1'] },
    ]);
  };

  const removeExperience = (id) => {
    setExperiences(experiences.filter((experience) => experience.id !== id));
  };

  const addTask = (experienceIndex) => {
    const newExperiences = [...experiences];
    newExperiences[experienceIndex].tasks.push('▪');
    setExperiences(newExperiences);
  };

  return (
    <>
      <Header
        showBtn={false}
        name={name}
        contact={contact}
        experiences={experiences}
      />
      <div>
        <EditableField value={name} onChange={setName} />
        <EditableField value={contact} onChange={setContact} />

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="experiences">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {experiences.map((experience, index) => (
                  <Draggable
                    key={experience.id}
                    draggableId={experience.id}
                    index={index}
                  >
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <div {...provided.dragHandleProps}>
                          <SVG_moveIcon />
                        </div>
                        <EditableField
                          value={experience.title}
                          onChange={(newTitle) => {
                            const newExperiences = [...experiences];
                            newExperiences[index].title = newTitle;
                            setExperiences(newExperiences);
                          }}
                        />
                        {experience.tasks.map((task, taskIndex) => (
                          <EditableField
                            key={taskIndex}
                            value={task}
                            onChange={(newTask) => {
                              const newExperiences = [...experiences];
                              newExperiences[index].tasks[taskIndex] = newTask;
                              setExperiences(newExperiences);
                            }}
                            onEnter={() => addTask(index)}
                          />
                        ))}
                        <button onClick={() => removeExperience(experience.id)}>
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

        <button onClick={addExperience}>Añadir Trabajo</button>
      </div>
    </>
  );
};
