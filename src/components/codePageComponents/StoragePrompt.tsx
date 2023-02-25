import { FC, useState } from 'react';

import { Payload } from '@/pages/code';

import StoragePromptOne from './StoragePromptOne';
import StoragePromptTwo from './StoragePromptTwo';

type StoragePromptProps = {
  setCurrPrompt: (prompt: string) => void;
  setPayload: (payload: Payload) => void;
  payload: Payload;
};
const StoragePrompt: FC<StoragePromptProps> = ({
  setCurrPrompt,
  setPayload,
  payload,
}) => {
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
