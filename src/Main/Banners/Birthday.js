import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const Birthday = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 576);
    setIsMobile(window.innerWidth <= 576); // Set initial value correctly
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="topbaner" style={{ paddingTop: "30px" }}>
      <img
        src={
          isMobile
            ?"https://bouqs.com/media/W1siZiIsIjIwMjUvMDEvMjAvMTcvMDAvMDAvMTRkMzFlZmEtMDIzNi00ZjYyLTg0OTMtOTBmNjBlODdkZDViLzAxMjFfSFBVcGRhdGVfVkRheVNhbGVfQmlydGhkYXlfTW9iaWxlLmpwZyJdLFsicCIsIm9wdGltIl1d/0121_HPUpdate_VDaySale_Birthday_Mobile.jpg?sha=acce56decc79100d"
          : "https://bouqs.com/cdn-cgi/image/quality=65,width=1536,format=auto/media/W1siZiIsIjIwMjUvMDEvMzEvMTUvMjMvMDAvMGVmZTExOGYtYTk0NS00NGExLTlhMTMtMzUxN2Y0NjNhZWZlLzAxMjFfSFBVcGRhdGVfVkRheVNhbGVfQmlydGhkYXlfTF8yLmpwZyJdLFsicCIsIm9wdGltIl1d/0121_HPUpdate_VDaySale_Birthday_L_2.jpg?sha=2fcf83208f00f046"
        }
        alt="Sample"
        className="Samedaycom-img"
      />

      <div className="overlay-text-banner">
        <h1 className="largfont" >
          Birthday bouqoest That WOW 
        </h1>
        <p>Not sure what to get them? Flowers are always a good idea.</p>
        <Button>Shop Birthday</Button>
      </div>
    </div>
  );
};

export default Birthday;
