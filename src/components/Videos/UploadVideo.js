import React, { useState } from 'react';
import { uploadVideo } from '../../services/api';
import Navbar from '../Navbar';

const UploadVideo = () => {
  const [title, setTitle] = useState('');
  const [imageurl, setimageurl] = useState('');
  const [googleDriveUrl, setgoogleDriveUrl] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await uploadVideo({ title, imageurl,googleDriveUrl, tags: tags.split(',') });
      alert('Video uploaded successfully');
      setTitle('');setimageurl('');setgoogleDriveUrl('');setTags('');
    } catch (err) {
      alert('Upload failed: ' + err.response.data.error);
    }
  };

  return (
    <div className='bg-purple-700 min-h-screen'>
    
    <div className="text-center text-white p-2">
                    <header className="flex justify-between items-center mb-5">
                        <div className="flex items-center ">
                            <img src="https://i.ibb.co/FxRbyJM/vms-logo.pngg" alt="Sierra logo" className="mr-3 h-8 w-8 rounded-full"/>
                            <span className="text-xl font-bold">Sierra</span>
                        </div>
                          <Navbar />
                    </header>
                    <main>
                        <p className="text-yellow-300 mb-1">#Repurpose video with AI</p>
                        <h3 className="text-4xl md:text-5xl font-bold mb-2">Now Repurpose long video, 10x faster.</h3>
                        <span  className="text-lg">Sierra allows you to create new video content in just a few clicks, saving you time and effort.</span>
                        <div className="max-w-lg mx-auto">
                        <form onSubmit={handleSubmit} className="container mt-3 border-spacing-1 text-white">
                            <div className="mb-2">
                                <label className="block text-left mb-1">Video Title here:</label>
                                <input type="text"
                                 placeholder="Paste your video Name here:" 
                                 className="w-full p-3 rounded-md text-gray-800 form-control my-3"
                                 value={title}
                                 onChange={(e) => setTitle(e.target.value)}
                                  required/>
                            </div>
                            <div className="mb-2">
                            <label className="block text-left mb-1">Image URL:</label>
                                  <input
                                    type="url"
                                    placeholder="Paste image URL"
                                    value={imageurl}
                                    onChange={(e) => setimageurl(e.target.value || 'https://i.ibb.co/89wH9BH/videothumb.png')}
                                  
                                    className="form-control my-3"
                                    required/>
                              </div>
                              <div className="mb-2">
                            <label className="block text-left mb-1">Google Drive URL:</label>
                                  <input
                                    type="url"
                                    placeholder="Paste your video link (Live, Youtube, Google Drive URL) "
                                    value={googleDriveUrl}
                                    onChange={(e) => setgoogleDriveUrl(e.target.value)}
                                  
                                    className="form-control my-3"
                                    required/>
                              </div>
                            <div className="mb-2">
                            
                                <label className="block text-left mb-1">Keywords:</label>
                                <textarea type="text" 
                                placeholder="Keyword to include relevant data : 100 words" 
                                className="w-full p-3 rounded-md text-gray-800 form-control my-3" 
                                    value={tags}
                                    onChange={(e) => setTags(e.target.value)}
                                    rows="4"></textarea>
                                
                            </div>

                            <button type="submit"
                            className="bg-purple-900 text-white py-3 px-6 rounded-md">Call to Action/Upload</button>
                            </form>
                        </div>
                    </main>
                </div>
  
    </div>
    
  );
};

export default UploadVideo;
