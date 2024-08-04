// import { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
// import { Header } from '@/components/Header/Header';
// import { EditableField } from '@/pages/CreateCV/EditableField';
// import { SVG_moveIcon, SVG_delete } from '@/assets/svg';

// import { useNavigate } from 'react-router-dom';

// export const CVBuilder = () => {
//   const [name, setName] = useState('M. Vazquez Martin');
//   const [contact, setContact] = useState({
//     location: 'Rosario, Santa Fe, Argentina',
//     linkedin: 'linkedin.com/in/matiasvazquezmartin/',
//     portfolio: 'mvazquezmartin.up.railway.app/',
//     phone: '+54 341 12 34 56',
//     email: 'mvazquezmartin@gmail.com',
//   });
//   const [description, setDescription] = useState('');
//   const [experiences, setExperiences] = useState([
//     { id: uuidv4(), title: 'Trabajo 1', tasks: ['función 1', 'función 2'] },
//     { id: uuidv4(), title: 'Trabajo 2', tasks: ['función 3', 'función 4'] },
//   ]);

//   useEffect(() => {
//     // Cargar datos desde localStorage
//     const savedData = JSON.parse(localStorage.getItem('cvData'));
//     if (savedData) {
//       setName(savedData.name);
//       setContact(savedData.contact);
//       setDescription(savedData.description);
//       setExperiences(savedData.experiences);
//     }
//   }, []);

//   useEffect(() => {
//     // Guardar datos en localStorage
//     const dataToSave = {
//       name,
//       contact,
//       description,
//       experiences,
//     };
//     localStorage.setItem('cvData', JSON.stringify(dataToSave));
//   }, [name, contact, description, experiences]);

//   const navigate = useNavigate();

//   const onDragEnd = (result) => {
//     if (!result.destination) return;

//     const reorderedExperiences = Array.from(experiences);
//     const [movedExperience] = reorderedExperiences.splice(
//       result.source.index,
//       1
//     );
//     reorderedExperiences.splice(result.destination.index, 0, movedExperience);

//     setExperiences(reorderedExperiences);
//   };

//   const handleContactChange = (field, value) => {
//     setContact((prevContact) => ({
//       ...prevContact,
//       [field]: value,
//     }));
//   };

//   const addExperience = () => {
//     setExperiences([
//       ...experiences,
//       { id: uuidv4(), title: 'Nuevo Trabajo', tasks: ['Nueva función 1'] },
//     ]);
//   };

//   const removeExperience = (id) => {
//     setExperiences(experiences.filter((experience) => experience.id !== id));
//   };

//   const addTask = (experienceIndex) => {
//     const newExperiences = [...experiences];
//     newExperiences[experienceIndex].tasks.push('▪');
//     setExperiences(newExperiences);
//   };

//   const previewData = {
//     name,
//     contact,
//     description,
//     experiences,
//   };

//   const handlePreviewClick = () => {
//     // Guarda los datos en localStorage
//     localStorage.setItem('cvData', JSON.stringify(previewData));

//     // Navega a la página de previsualización
//     navigate('/pdfpreview');
//   };

//   return (
//     <>
//       <Header
//         showBtn={false}
//         name={name}
//         contact={contact}
//         experiences={experiences}
//       />
//       <div className="cv-builder-container">
//         <div className="cv-builder">
//           <div className="title-name">
//             <EditableField value={name} onChange={setName} />
//           </div>
//           <div className="contact-container">
//             <EditableField
//               value={contact.location}
//               onChange={(value) => handleContactChange('location', value)}
//             />
//             <EditableField
//               value={contact.linkedin}
//               onChange={(value) => handleContactChange('linkedin', value)}
//             />
//             <EditableField
//               value={contact.portfolio}
//               onChange={(value) => handleContactChange('linkedin', value)}
//             />
//             <EditableField
//               value={contact.phone}
//               onChange={(value) => handleContactChange('phone', value)}
//             />
//             <EditableField
//               value={contact.email}
//               onChange={(value) => handleContactChange('email', value)}
//             />
//           </div>

//           <DragDropContext onDragEnd={onDragEnd}>
//             <Droppable droppableId="experiences">
//               {(provided) => (
//                 <div {...provided.droppableProps} ref={provided.innerRef}>
//                   {experiences.map((experience, index) => (
//                     <Draggable
//                       key={experience.id}
//                       draggableId={experience.id}
//                       index={index}
//                     >
//                       {(provided) => (
//                         <div
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                         >
//                           <div {...provided.dragHandleProps}>
//                             <SVG_moveIcon />
//                           </div>
//                           <EditableField
//                             value={experience.title}
//                             onChange={(newTitle) => {
//                               const newExperiences = [...experiences];
//                               newExperiences[index].title = newTitle;
//                               setExperiences(newExperiences);
//                             }}
//                           />
//                           {experience.tasks.map((task, taskIndex) => (
//                             <EditableField
//                               key={taskIndex}
//                               value={task}
//                               onChange={(newTask) => {
//                                 const newExperiences = [...experiences];
//                                 newExperiences[index].tasks[taskIndex] =
//                                   newTask;
//                                 setExperiences(newExperiences);
//                               }}
//                               onEnter={() => addTask(index)}
//                             />
//                           ))}
//                           <button
//                             onClick={() => removeExperience(experience.id)}
//                           >
//                             <SVG_delete />
//                           </button>
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </DragDropContext>

//           <button onClick={addExperience}>Añadir Trabajo</button>
//         </div>
//         <button onClick={handlePreviewClick}>Previsualizar PDF</button>
//       </div>
//     </>
//   );
// };
import { useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Header } from '@/components/Header/Header';
import { EditableField } from '@/pages/CreateCV/EditableField';
import { SVG_moveIcon, SVG_delete } from '@/assets/svg';
import { useNavigate } from 'react-router-dom';
import { CVContext } from '@/context/CVContext';

export const CVBuilder = () => {
  const { cvData, setCvData } = useContext(CVContext);
  const navigate = useNavigate();

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
        { id: uuidv4(), title: 'Nuevo Trabajo', tasks: ['Nueva función 1'] },
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
      newExperiences[experienceIndex].tasks.push('▪');
      return {
        ...prevData,
        experiences: newExperiences,
      };
    });
  };

  const handlePreviewClick = () => {
    navigate('/pdfpreview');
  };

  return (
    <>
      <Header
        showBtn={false}
        name={cvData.name}
        contact={cvData.contact}
        experiences={cvData.experiences}
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
          </div>
          <div className="contact-container">
            <EditableField
              value={cvData.contact.location}
              onChange={(value) => handleContactChange('location', value)}
            />
            <EditableField
              value={cvData.contact.linkedin}
              onChange={(value) => handleContactChange('linkedin', value)}
            />
            <EditableField
              value={cvData.contact.portfolio}
              onChange={(value) => handleContactChange('portfolio', value)}
            />
            <EditableField
              value={cvData.contact.phone}
              onChange={(value) => handleContactChange('phone', value)}
            />
            <EditableField
              value={cvData.contact.email}
              onChange={(value) => handleContactChange('email', value)}
            />
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="experiences">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
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
                        >
                          <div {...provided.dragHandleProps}>
                            <SVG_moveIcon />
                          </div>
                          <EditableField
                            value={experience.title}
                            onChange={(newTitle) => {
                              setCvData((prevData) => {
                                const newExperiences = [
                                  ...prevData.experiences,
                                ];
                                newExperiences[index].title = newTitle;
                                return {
                                  ...prevData,
                                  experiences: newExperiences,
                                };
                              });
                            }}
                          />
                          {experience.tasks.map((task, taskIndex) => (
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
                          <button
                            onClick={() => removeExperience(experience.id)}
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

          <button onClick={addExperience}>Añadir Trabajo</button>
        </div>
        <button onClick={handlePreviewClick}>Previsualizar PDF</button>
      </div>
    </>
  );
};
