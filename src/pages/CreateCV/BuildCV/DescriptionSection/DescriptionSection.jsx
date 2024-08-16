import { CVContext } from '@/context/CVContext';
import { EditableField } from '@/pages/CreateCV/BuildCV/EditableField/EditableField';
import { useContext } from 'react';

export const DescriptionSection = ({ cvData }) => {
  const { setCvData } = useContext(CVContext);

  return (
    <div className="description-container">
      <EditableField
        value={cvData.description}
        onChange={(description) =>
          setCvData((prevData) => ({ ...prevData, description }))
        }
      />
    </div>
  );
};
