import React, { useState, useEffect } from 'react';
import { getVideos } from '../../services/api';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';

const VideoList = () => {
  const [videos, setVideos] = useState([]); // Original data from API
  const [filteredVideos, setFilteredVideos] = useState([]); // Filtered data
  const [filter, setFilter] = useState(""); // Current filter criteria
  const [tags, setTags] = useState(""); // Search term
  const [page, setPage] = useState(1); // Pagination
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown visibility
  let formattedDate;
  const navigate = useNavigate();


  const handleFilter = (criteria) => {
    setFilter(criteria); // Update filter criteria state
    setShowDropdown(false); // Close the dropdown
  };

  // Apply filtering logic whenever `filter` or `tags` change
  useEffect(() => {
    let filteredData = [...videos];
    if (filter === "title") {
      filteredData = videos.filter((item) =>
        item.title.toLowerCase().includes(tags.toLowerCase())
      );
    } else if (filter === "date") {
      filteredData = [...videos].sort(
        (a, b) => new Date(a.uploadDate) - new Date(b.uploadDate)
      );
    }
    setFilteredVideos(filteredData);
  }, [filter, tags, videos]);

  // Fetch videos from API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await getVideos({ filter, tags, page });
        setVideos(data.videos);
        setFilteredVideos(data.videos); // Initialize filteredVideos with the fetched data
      } catch (err) {
        alert("Failed to load videos");
      }
    };
    fetchVideos();
  }, [page]);

  const handleVideoClick = (video) => {
    navigate(`/video-player`, { state: { video } });
  };

  return (
<div className="p-4  bg-purple-700 min-h-screen">
                  <header className="flex justify-around items-center mb-6">
                        <div className="flex items-center">
                            <img src="https://i.ibb.co/FxRbyJM/vms-logo.png" alt="Sierra logo" className="mr-2 h-8 w-8 rounded-full"/>
                            <span className="text-xl font-bold">Sierra</span>
                        </div>
                      
                          <Navbar />
                    </header>
                    <div className="flex justify-around items-center mb-4">
                        <div className="relative w-3/6 flex justify-between items-center max-w-xs">
                        <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                            <input type="text" 
                            placeholder="Search" 
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600" 
                            />
                           
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full">Hype</button>
                            <button className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full">Reach</button>
                            <button className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full">Impact</button>
                            <button className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full">Trend</button>
                            <button className="px-4 py-2 bg-purple-600 text-white rounded-full">Engage</button>
                        </div>
                        <div className="relative">
                          <button
                            className="p-2 bg-purple-500 text-white rounded-full shadow-sm"
                            onClick={() => setShowDropdown(!showDropdown)}
                          >
                            <i className="fas fa-filter"></i> 
                          </button>
                          {showDropdown && (
                            <div 
                            className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                              <button
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                onClick={() => handleFilter("title")}
                              >
                                Filter by Title
                              </button>
                              <button
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                onClick={() => handleFilter("date")}
                              >
                                Filter by Date
                              </button>
                            </div>
                          )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                        {filteredVideos.map(video => (
                            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden" onClick={() => handleVideoClick(video)}>
                                <div className="relative">
                                    <img src={video.imageurl || `https://placehold.co/400x225`} alt={`Video thumbnail ${video.id}`} className="w-full h-48 object-cover" />
                                    <div className="flex items-center justify-around mb-2 absolute top-2 left-2  gap-80">
                                        <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">{video.score || "99/100"}</span>
                                        <span className="text-gray-400 text-xs ">{video.fileSize || "0:12"}</span>
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
                                      {formattedDate = video.uploadDate
                                      ? new Intl.DateTimeFormat('en-GB', {
                                          day: '2-digit',
                                          month: 'short',
                                          year: 'numeric',
                                          hour: 'numeric',
                                          minute: 'numeric',
                                          hour12: true,
                                        }).format(new Date(video.uploadDate))
                                      : '24 Aug, 2008 • Time: 5:00 am'}
                                      
                                      </div>
                                </div>
                                <div className="p-4">
                                
                                    <h2 className="text-sm font-semibold mb-2">Video Title : {video.title}</h2>
                                    <p className="text-gray-500 text-sm mb-2">{video.hashtags || "#ViralScore #BuzzMeter #ContentImpact #ViralScore #BuzzMeter"}</p>
                                    <p className="text-xs text-gray-400">Created on:
                                    { formattedDate = video.uploadDate
                                      ? new Intl.DateTimeFormat('en-GB', {
                                          day: '2-digit',
                                          month: 'short',
                                          year: 'numeric',
                                          hour: 'numeric',
                                          minute: 'numeric',
                                          hour12: true,
                                        }).format(new Date(video.uploadDate))
                                      : '24 Aug, 2008 • Time: 5:00 am'} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
    
  );
};

export default VideoList;
