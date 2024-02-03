


import React, { useState } from 'react';
import Button from './UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { listActions } from '../store/listSlice';
import Items from './Items';
import Modal from './UI/Modal';
import { useSearchParams } from 'react-router-dom';

const MainHandler = () => {
  const [searchParams,setSearchParams]=useSearchParams()
  const showModalParams=()=>{
searchParams.set('showModal', true)
setSearchParams(searchParams)
  }
  const dispatch = useDispatch();
  const inputValue1 = useSelector((state) => state.list);
  
  const dispatch1 = useDispatch();
  const { toggle, headingText, paragraphText } = useSelector((state) => state.list || { toggle: false, headingText: '', paragraphText: '' });

  const [newTitle, setNewTitle] = useState('');
  const [newAge, setNewAge] = useState('');

  const handleInput1Change = (event) => {
    dispatch(listActions.updateInputValue1(event.target.value));
  };

  const handleInput2Change = (event) => {
    dispatch(listActions.updateInputValue2(event.target.value));
  };
  return (
    <div>
      <Button title='Open Modal To Add' onClick={showModalParams} />
      <h1>{headingText}</h1>
      <p>{paragraphText}</p>
      {!toggle && <Items newTitle={newTitle} newAge={newAge}/>}
      {searchParams.has('showModal') && (
        <Modal
        value={inputValue1} 
        value2={inputValue1} 
          updateHeadingText={(newText) => dispatch(listActions.updateHeadingText(newText))}
          updateParagraphText={(newText) => dispatch(listActions.updateParagraphText(newText))}
          setNewAge={setNewAge}
          setNewTitle={setNewTitle}
        />
      )}
    </div>
  );
};

export default MainHandler;