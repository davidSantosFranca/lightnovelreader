import { usePostStatusMutation } from "../api/blobStorage.api";
import { getRelativeScrollPosition } from "../utils/scrollUtils";

export const useSaveButton = () => {
  const [mutation, { error: postStatusError, isLoading: postStatusIsLoading }] =
    usePostStatusMutation();
  const handleSave = async () => {
    try {
      if (postStatusIsLoading) {
        // If the mutation is still in progress, don't allow the user to click the button again
        return;
      }
      if (postStatusError) {
        // If the mutation errored, show an error message to the user
        console.error("Error saving data:", postStatusError);
        alert("An error occurred while saving data. Please try again.");
        return;
      }
      // Call the mutation to save the data to the server
      mutation({
        chapterPosition: getRelativeScrollPosition(),
        chapterTitle: document.title,
      });
      alert("Data saved successfully!");
    } catch (error) {
      // Handle any errors that occur during the save process
      console.error("Error saving data:", error);
      alert("An error occurred while saving data. Please try again.");
    }
  };
  return { handleSave };
};
