import React from 'react';
import ReactDOM from 'react-dom';
import { EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import cal from "../image/images (1).png";
import contact from '../image/contacts.png'
import maps from '../image/maps.png'
import task from '../image/download.jpg';
import keep from '../image/906334.png'




function TextEditor() {


    return (
        <div className='bg-[#F8F9FA] min-h-screen pb-16 flex'>
  <Editor
    toolbarClassName='flex sticky top-0 z-50 justify-center mx-auto'
    editorClassName='mt-6 bg-white shadow-lg max-w-5xl mx-auto mb-12 border p-20'
  />
  <div className='ml-auto'>
    <img className='rounded-full cursor-pointer h-10 w-10 ml-2 mt-3' src={cal} />
    <img className='rounded-full cursor-pointer h-8 w-8 ml-2 mt-3' src={keep} />
    <img className='rounded-full cursor-pointer h-8 w-8 ml-2 mt-3' src={task} />
    <img className='rounded-full cursor-pointer h-8 w-8 ml-2 mt-3' src={contact} />
  </div>
</div>)
}

export default TextEditor;