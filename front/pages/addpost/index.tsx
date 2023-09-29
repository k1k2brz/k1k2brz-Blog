import { createPost } from 'apis/post';
import React, { ChangeEvent, useState } from 'react';
import { FieldError, FieldErrorsImpl, Merge, useForm } from 'react-hook-form';

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

  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();

  const postOnSubmit = async (data: CreatePost) => {
    if (content === '') return;
    const post = {
      title: data.title,
      content: data.content,
    };

    const response = await createPost(post);

    if (response.code === '200') {
      setTitle('');
      setContent('');
      alert('게시글이 등록되었습니다.');
    }
  };

  const handleTitleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <form>
      <input
        id="postHead"
        placeholder="제목을 입력해주세요."
        {...register('title', {
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
        value={title || ""}
        onChange={handleTitleInputChange}
      ></input>
      <textarea
        id="postContent"
        placeholder="게시글을 입력해주세요."
        {...register('content', {
          required: '게시글을 입력해주세요.',
          minLength: {
            value: 1,
            message: '1글자 이상으로 입력해주세요.',
          },
          maxLength: {
            value: 1000,
            message: '1000글자 이하로 입력해주세요.',
          },
          validate: validateBio,
        })}
        value={content}
        onChange={handleContentInputChange}
      ></textarea>
      <button onClick={handleSubmit(postOnSubmit)}>게시글 등록</button>
      <div>{errors.title ? <p> {errors?.title?.message as string}</p> : 
      errors.content ? (<p> {errors?.content?.message as string}</p>) : <p>{isSubmitted}</p>
        }</div>
    </form>
  );
}

export default AddPost;
