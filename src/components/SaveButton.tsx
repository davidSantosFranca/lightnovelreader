
import { useSaveButton } from '../hooks/useSaveButton';

const SaveButton = () => {
// Call the saveToBlobStorage function from the blobstorage API
  const { handleSave } = useSaveButton();

  return (
    <button onClick={handleSave} id="save">
      Save
    </button>
  );
};

export default SaveButton;
