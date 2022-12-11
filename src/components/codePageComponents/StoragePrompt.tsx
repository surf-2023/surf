import { FC, useState } from 'react';

import StoragePromptOne from './StoragePromptOne';
import StoragePromptTwo from './StoragePromptTwo';

const StoragePrompt: FC = ({ setCurrPrompt, setPayload }) => {
  const [isPartOne, setPart] = useState(true);
  if (isPartOne) {
    return <StoragePromptOne setPart={setPart} setPayload={setPayload} />;
  } else {
    return (
      <StoragePromptTwo setCurrPrompt={setCurrPrompt} setPayload={setPayload} />
    );
  }
};
export default StoragePrompt;
