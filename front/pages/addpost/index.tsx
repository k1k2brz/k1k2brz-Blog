import React from 'react';
import { useForm } from 'react-hook-form';

const validateBio = (value: string) => {
  if (/\s{2,}|^\s|\s$/.test(value)) {
    return '연속된 공백 또는 앞뒤 공백은 사용할 수 없어요.';
  }
  return true;
};

function AddPost() {
  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const postOnSubmit = async (data: any) => {};

  return (
    <form>
      <input
        id="postHead"
        placeholder="제목을 입력해주세요."
        {...register('content', {
          required: '제목을 입력해주세요.',
          minLength: {
            value: 2,
            message: '2글자 이상으로 입력해주세요.',
          },
          maxLength: {
            value: 30,
            message: '30글자 이하로 입력해주세요.',
          },
          validate: validateBio,
        })}
      ></input>
      <textarea name="postContent" id="postContent"></textarea>
      <button onClick={handleSubmit(postOnSubmit)}>게시글 등록</button>
    </form>
  );
}

export default AddPost;
