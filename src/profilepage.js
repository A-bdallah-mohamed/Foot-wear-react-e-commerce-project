import React, { useEffect } from "react";
import loginpage from './loginpage.jpg'
import logoo from './sneakers-logos_black.PNG';
import { IoIosArrowBack } from "react-icons/io";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Profilepage() {
    useEffect(() => {
        // Disable scrolling on mount
        document.body.style.overflow = 'hidden';

        // Re-enable scrolling on unmount
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, []);
    return(
        <>
      <div className="loginpage">

        <div className="profilepageimgcontainer">
        <img src={loginpage}></img>
        </div>
    
        <div className="loginpageinputs">

            <div className="loginheader">
            <Link to="/">
                <span>
        <IoIosArrowBack style={{ fontSize: '25px'}} /></span>
        <img src={logoo}></img>    </Link>
        </div >
        <div className="profilepageinputdata">
            <p>Create an account or log in</p>
            <span>Every step is one :) Start by entering your email address.</span>
            <div className="inputcontainer">
            <input ></input>
            <label className="placehodler">E-mail</label>
            </div>
            <div className="inputcontainer">
            <input></input>
            <label className="placehodler">Password</label></div>
            <button>Get on</button>
            <div className="socialcontainer">
                <div className="social"><span><img src="https://img.utdstc.com/icon/fe0/ab6/fe0ab67fa0de2b2681602db5708a076f50dd21106e0c2d38b9661875a37e235e:200"></img></span><span>Facebook&nbsp;</span></div>
                <div className="social"><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABUFBMVEX////qQzU0qFNChfT7vAXy9/8idvP3+f89hPT7ugA1f/Svx/r7uADqRDbpNybqQTMlpEnpOSn8wADv+PItpk71rajqPi/pMR/1saw4gPSmw/r5ysf1rKf86Ob+8vH50M3ucmnoKhbpPDf5/frH5c70paD2uLTsWk//+vrrU0fxjIXznJbrSj3619T//fL93Y77wjL95K3+78n8z2z92YL8zVb/99/8xEnQ4Pz+67v+5KWOy519qPe50PvX7dwzqkax27ve8ePuaF7vf3jylI3whX30lyPoLDj4qQ/rTTLuZyvzhCHxeSX0khvtXS75rwz5slIAafKVtfje6f1OjvXWxVqcsjWXt/jruw15rkBMqk1KsGVvnva3tCpmuXphq0iAqvfNtyGOsDp4wou1ti6g061orrE3oHs2pGk/jNg9ksI4nog/js47mKY8lbM6m5YY6NYWAAAINElEQVR4nO2b2X/aRhCAhcA22EaHwVII5iqHwQY7zdGkJQGM7fRM2zRumlYuTUppkh7p//9WIS4JxGpBu1rJv/meEj+s9HlmZ/aQOQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK/JZjKNdGW/XD4ulw8q6UYmk2X9SuRoNC7y+bhgIA8Z/VPs5i/TuaB7ZnOVfFcWZEURQ/F4aIb+H1FRdNfDbjmdrbJ+zzXJVo5qgqooIRSiIqi1/EGG9cuuTrZyrqoyUm6Goqrd/WBJ5vJ68DD1xpJCoVth/dq4ZCuHghKKO1stRLIWiEBWyzVhtfBNiStC/cLvxbV6UFfF9fwMREEp+9px353fyFHcZ62xlFxNcOtnOKq1HGsVWzJHsrJ6ebFFkY98WHIqNYGMnoFQS7MWmqN6VCCRoDPEwjFrJwu5ukAoQafE1UMfZeqBTDaAI5SQXxY51XMiJXQRUbjF2s0gmydZYqyolz7YWDXquDuItRTzzFc4aYf9n1sKrLtGjtIUnMB8JuaoFNEpcfWGC4YKB4wF05RTlHkEGwpVQfbdMFu/4RGs5mn2QX0OMt8Hn6+6kokP933GebeMkd4q6yLDHawkKIqCKsfr3cuL4/Lx8VG+HldUFeHJfg6u0ifioqLWu8e3Gtnp6X01m81UDro1VRbtN13sBav4VUaR4/l0xm4BXc3mLu1PHpkXGY47wszRuFw4rKA2stV0vrBQsZg3eo6rFPB29Ip63nAcLHMkWB1V5lWUy9SwclSRMfyM8c5lU66yn4OYOSoKh/innrnD6QLQD4I5nFavCMerbM+rF2PFgg8EuUOMPa9Qw0vQGbn6cFj2jV7nlupcZgoXq5+vZLqqL1IUpxWKcnmtkS99kaLcvuooKK55tlJlfSZjcPL0cydBwZ83R7ic7n3x5UdowVVrjL84uROL7H6FUBTVYAtyH+9GInuRr5cryr6YSy7QQ6iz93SJX1y4YP2GLrm7GzHY27WfjMI56zd0y4NYZMI3Nopijfktg0tOZoKRvWeLhoVg9wluVGdmigttQw76JOS4e6YYDiejtW2IIR9c9rnjxBxCw9HSNgS/XEqvz2fzhnqmhqaOSjfwIeTuLRhG9r77dqIoBL3XD1dsC4KmtqHkgx/CuzFbw71nxm5DDX4Irb3Ckql62xBrwQ+heUEzp6i3DYH9Iad7Hi4zHLaNQtDXa9zSaThW/B53mK0N97Aw3P0Md5jbzzfd8vwRHcP7SMO7uMPspMJuSf1Ex3BpodGJ3cEeZmfbveEPDAwfeGp4TUXwBJGjKyQpCcNweIuG4SdL+v0oht4aprw3vHPiqeE2lX6BNHxY9NaQSrv4FGEY89rwCQ3Dxe2vqdDcxx+HiOFtzw1Pb4LhKaId4q/ZfG2IiuHNMIQYBt/wxsfw5tfSm98PUWsaz1dtVAx9tS713tDrvYX3hh7vgOkY+mmPT2dv4aNzmvD2C+8NPT1ro3SKQey81L+GyDPvGPa6jYBh9IqF4Y/4hlEckCF8TUUQdfcUi7yUErjDbGHxBBFqWqf6iFLz6mde6pB9GCqZt3fIPmvKsjvg2KtfeJ7X8BduOFwj8nSTTrNYPhF/5YdIJZLP2rhCGdK6QFzyLcbvhiCf7JEM4iNEkkbpXMwMsfmeJvbqN34M0SC+RtwyUrp6GrK4CY694aeQDCIySSmtSocsfNcWecmbIFhOUb0inKJ0yT3E+m2iKUPHEAsiKoTRK1JPscHSL8wZOg5ik9Bz0CGkdMdtYP5GeNwkrIotMs9BhZDmNORMy5rYpElY0bDXbiiQIQyHaXVDg8m3+qNljE0Q+wQesoH0Sz0m8AgEo7+3WJyCJKfiY+QXN3STdFRrYtYmMafouu8/cfikiGqSGn/3FNN3EgjcVptHKfTekGYlNTjdfWM/BQkpbqE3v+FNiu1+xMkfaD+Xibpxhc5Rqu1+TEdyVOTXVty4dpiEtOvMkKKzIC8N1hv7hZNglM73XnPgBFFqrrNEfRR2+jKT2gmNFS2JoaitXm92Nh38wtRbxZgWRhD55KphbP3pLEjnRsaGJo6iHsYSvmNxwLffOiVp9MqbEHJcQsMx1MPYx0zVYknTf2nSu/foJbdnIdSLTRtLEdexo42SItn+C6lI6TDfFrw8NRy1zhlyqFZTmg3W/ju1PFPpL2dMFHHq6cSR75XObGdkMdHqa5JlJD1TlynS3jbNUcI2HEs2O61EYuJZTCQSrc6gp0nS/DhJ/h97xahHnWLKADdPJ8EZ5mKv3xwMBs1mXzN+YP9bav9rOxm9WK9Z6a+oaAQoKQ1JohOg/dZm+b392mtBrthbJVFX+0XwC22D1qUokgRPUfGDVTFK6dsEB1rUDPVM/S9s3gl7PwlHlNaYitiK70xrOAaTcKJIMYqmBQ47QbpR1NvGKFO3HzOoMh4pGruN1LXHrX5e0aG5uULS3m+nWPQJCy16TUOn/eGataDeF3sUM1Xqk/3EYz2K6yzgMAXXOtGiwIBSoq57KkmBEk8hjMkk0U90XFJsYh5s4CP1iFy3kmNy2EKIpNTxyRSckWgu2dKug9Qj9EkAWUqkwigl/RfAMR0SFScpNX02A80UB24dJamPPn5kTnGguZiPUhL3nJwlic66jhLf9Hn8prR6y84Kl5KU2lrHx/NvgUSnL0nYUzIpSdogKOGbUew0NcfDUeMMVesNghQ9M4lWp9dbegZsHBBrvU4p4dfuh0mr1ez1eGkBrddvtgJQOTEpJs7OSp3BiE6pdXYW1LwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgCDzP7hHIhidm1CRAAAAAElFTkSuQmCC"></img></span><span>Google&nbsp; </span></div>
                <div className="social"><span><img src="https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png"></img></span><span>Apple&nbsp;</span></div>
            </div>
            <span style={{fontSize: "11px" , maxWidth:"250px", marginTop:"20px" , textAlign:"center"}}>This website is protected by reCAPTCHA. Google's privacy policy and terms of service apply.</span>
        </div>
        </div>
        </div>
        </>
    );
}
export default Profilepage;