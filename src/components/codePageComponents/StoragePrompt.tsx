import { FC, useState } from 'react';

import StoragePromptOne from './StoragePromptOne';
import StoragePromptTwo from './StoragePromptTwo';

const StoragePrompt: FC = ({ setCurrPrompt, setPayload, payload }) => {
  const [isPartOne, setPart] = useState(true);
  if (isPartOne) {
    return (
      <StoragePromptOne
        setPart={setPart}
        setPayload={setPayload}
        setCurrPrompt={setCurrPrompt}
        payload={payload}
      />
    );
  } else {
    return (
      <StoragePromptTwo
        setCurrPrompt={setCurrPrompt}
        setPayload={setPayload}
        setPart={setPart}
        payload={payload}
      />
    );
  }
};
export default StoragePrompt;
