import React, {useState} from 'react';

export default function Search(props) {
  const {cb = Function.prototype} = props;
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    cb(value);
  }

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search"
          placeholder="search category"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          className='btn light-green darken-3'
          onClick={handleSubmit}
          style={{position: "absolute", top: 0, right: 0}}
        >
          Search
        </button>
      </div>
    </div>
  )
}
