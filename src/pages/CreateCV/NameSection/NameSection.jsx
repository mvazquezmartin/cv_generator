import { CVContext } from '@/context/CVContext';
import { EditableField } from '@/pages/CreateCV/EditableField/EditableField';
import { useContext } from 'react';

export const NameSection = ({ cvData }) => {
  const { handleNameChange } = useContext(CVContext);

  return (
    <div className="title-name">
      <EditableField
        value={cvData.name}
        onChange={(name) => handleNameChange('name', name)}
      />
      <EditableField
        value={cvData.position}
        onChange={(position) => handleNameChange('position', position)}
      />
    </div>
  );
};
