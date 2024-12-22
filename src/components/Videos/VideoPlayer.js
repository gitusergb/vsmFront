import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';

const VideoPlayer = () => {
  const location = useLocation();
  const { video } = location.state || {};
  let googleDriveUrl ,fileId;
  if (!video) {
    return <div>No video data available</div>;
  }else{
    console.log(video.googleDriveUrl)
    function extractFileId(url) {
        const regex = /(?:drive\.google\.com\/file\/d\/)([\w-]+)/;
        const match = url.match(regex);
        return match ? match[1] : null;  
      }
      
     googleDriveUrl = video.googleDriveUrl;
      fileId = extractFileId(googleDriveUrl);
      
      console.log(fileId);  // Output: 1-7GCLjFd3QA7kGIWXyqoQVwGIhHB1xjT
      
  }

  return (
    <div className="p-4 bg-purple-700 min-h-screen text-gray-100 flex flex-col">
         <header className="text-white shadow-sm flex items-center justify-between px-6">
                        <div className="flex items-center">
                            <img src="https://i.ibb.co/FxRbyJM/vms-logo.png" alt="Sierra logo" className="h-8 w-8 rounded-full"/>
                            <h1 className="text-xl font-bold ml-2">Sierra</h1>
                        </div>
                          
                          <nav className="flex space-x-6 items-center">
                          <Navbar />
                            <a href="#" className="text-gray-100">Pricing</a>
                            <a href="#" className="text-gray-100">Support</a>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <i className="fas fa-search text-gray-100"></i>
                            <i className="fas fa-bell text-gray-100"></i>
                            <i className="fas fa-user-circle text-gray-100"></i>
                        </div>
                    </header>
                    <main className="flex-grow flex flex-col lg:flex-row">
                        <div className="flex-grow flex justify-center items-center bg-transparent">
                        <iframe 
                                src={`https://drive.google.com/file/d/${fileId}/preview`}
                                width="640" 
                                height="480" 
                                allow="autoplay; fullscreen" 
                                title="Video Player"
                                />
                                                                        
                        </div>
                        <div className="w-full lg:w-1/3 bg-purple-300 p-6">
                            <div className="flex items-center justify-between mb-4 text-gray-700">
                           
                                <h2 className="text-lg  font-semibold">{video.title}</h2>
                                <button className="text-gray-600"><i className="fas fa-edit"></i></button>
                            </div>
                            <button className="bg-purple-600 text-white px-4 py-2 rounded mb-4">Advance Edit</button>
                            <div className="space-y-3">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-600">Hashtags</h3>
                                    <p className="text-sm text-gray-600">{video.hashtags ||  "#ViralScore #BuzzMeter #ContentImpact #ViralScore #BuzzMeter"}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-600">Description</h3>
                                    <p className="text-sm text-gray-600">{video.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-600">Transcript</h3>
                                    {(video.transcript)?(<div className="space-y-2 text-gray-600">
                                        <p>{video.transcript}</p></div>):(<div className="space-y-2">
                                        <div>
                                            <p className="text-xs text-gray-500">0:20</p>
                                            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">0:20</p>
                                            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">0:20</p>
                                            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>)}
                                    
                                </div>
                            </div>
                        </div>
                    </main>
    </div>
  );
};

export default VideoPlayer;
