import Input from './Input';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { listActions } from '../../store/listSlice';
import { useSearchParams } from 'react-router-dom';

const Modal = () => {
  const [searchParam,setSearchParam]=useSearchParams()
  const closeModal=()=>{
    searchParam.delete('showModal')
    setSearchParam(searchParam)
  }
  const dispatch = useDispatch();
  const isModalVisible = useSelector((state) => state.list.toggleVisible);

  const [newTitle, setNewTitle] = useState('');
  const [newAge, setNewAge] = useState(0);

  const toggleItems = () => {
    dispatch(listActions.toggleVisible());
  };

  const handleSaveItem = () => {
    dispatch(listActions.addItem({ title: newTitle, age: newAge }));
    toggleItems();
  };

  return (
    <>
      {!isModalVisible && (
        <BackDrop>
          <Card>
            <div>
              <Input
                type='text'
                titleholder='Введите ваше имя'
                value={newTitle}
                onChange={(e) => {
                  setNewTitle(e.target.value);
                }}
              />
              <Input
                type='number'
                titleholder='Введите ваш возраст'
                value={newAge}
                onChange={(e) => setNewAge(e.target.value)}
              />
              <Button title='Сохранить' onClick={handleSaveItem} />
              <Button title='Закрыть' onClick={closeModal} />
            </div>
          </Card>
        </BackDrop>
      )}
    </>
  );
};

export default Modal;

const Card = styled.div`
  min-height: 250px;
  min-width: 400px;
  background-color: #fff;
  border-radius: 5px;
  position: fixed;
  top: 100px;
  left: 480px;
  z-index: 1;
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledInput = styled.input`
  margin-left: 100px;
  margin-top: 80px;
`;
