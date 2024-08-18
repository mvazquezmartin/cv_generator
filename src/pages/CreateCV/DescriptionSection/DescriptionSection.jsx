import { CVContext } from '@/context/CVContext';
import { EditableField } from '@/pages/CreateCV/EditableField/EditableField';
import { useContext } from 'react';

export const DescriptionSection = ({ cvData }) => {
  const { handleDescriptionChange } = useContext(CVContext);

  return (
    <div className="description-container">
      <EditableField
        value={cvData.description}
        onChange={(description) => handleDescriptionChange(description)}
      />
    </div>
  );
};
