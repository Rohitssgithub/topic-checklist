import React, { useState } from 'react';
import TabForm from '../../component/TabForm/TabForm'
import './Home.css';
import UseCallBack from '../../component/Hooks/UseCallBack';
import UseFrom from '../../component/Hooks/UseForm';
import ComA from '../../component/Hooks/higherordercomponent/ComA';
import ComB from '../../component/Hooks/higherordercomponent/ComB';
import MusicPlayer from '../../component/musicplayer/MusicPlayer';
import InputField from '../../component/input/Input';
import ImageTextExtractor from '../../component/imagetext/ImageText';
import TextToImageConverter from '../../component/imagetext/TextToImage';
import FileUpload from '../../component/imagetext/FileProgress';
const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [movingTabStyle, setMovingTabStyle] = useState({});

  const handleTabClick = (index) => {
    setActiveTab(index);

    const s = 25 * index;
    console.log(s)
    setMovingTabStyle({ left: `${s}%` });
  };

  return (
    <>
      <FileUpload />
      <ImageTextExtractor />
      <TextToImageConverter />
      {/* <InputField /> */}
      {/* <MusicPlayer></MusicPlayer> */}
      {/* <ComA></ComA>
    <ComB></ComB> */}
      {/* <UseFrom></UseFrom> */}
      {/* <TabForm></TabForm> */}
      <>
        {/* <div className="tabs">
          <ul className="tabs--list">
            {[...Array(4)].map((_, index) => (
              <li key={index}
                title={`TABS ${index + 1}`}
                data-content={`tabs${index + 1}`}
                className={activeTab === index ? 'actived' : ''}
                onClick={() => handleTabClick(index)}>
                {`TABS ${index + 1}`}
              </li>
            ))}
            <li className="moving-tab moving-tab--interaction" style={movingTabStyle} />
          </ul>
          <ul className="tabs--content">
            {[...Array(4)].map((_, index) => (
              <li key={index} data-content={`tabs${index + 1}`} className={activeTab === index ? 'actived' : ''}>
                {`Tabs ${index + 1}`}
              </li>
            ))}
          </ul>
        </div> */}
      </>
    </>
  );
};

export default Home;
