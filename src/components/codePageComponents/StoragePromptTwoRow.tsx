import { FC } from 'react';

import styles from '../../styles/Home.module.css';
const StoragePromptTwoRow: FC = ({
  isPrimary,
  index,
  attributes,
  handleInputChange,
  handleDelete,
}) => {
  return (
    <div className={styles['code-page-storage-heading']}>
      <div>
        <input
          onChange={(event) => handleInputChange(event, index, 'name')}
          value={attributes[index].name}
          className={styles['code-page-prompt-input']}
        />
      </div>
      <div className={styles['code-page-entry-row-right']}>
        <select
          value={attributes[index].type}
          onChange={(event) => handleInputChange(event, index, 'type')}
          className={styles['code-page-storage-select']}
        >
          <option value='u8'>u8</option>
          <option value='u16'>u16</option>
          <option value='u32'>u32</option>
          <option value='u64'>u64</option>
          <option value='String'>String</option>
        </select>
        {isPrimary && <div>Primary Key</div>}
        {attributes.length > 2 && (
          <button
            onClick={(event) => handleDelete(event, index)}
            className={styles['code-page-entry-row-right-button']}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
export default StoragePromptTwoRow;
