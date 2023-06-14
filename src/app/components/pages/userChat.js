import React from "react";
import DashboradMenu from './../DashboardMenu';
import proifleimage from './../../../assests/images/mikeross.png';
import UsHeader from "../Header/Userheader";
import UserMessageCht from "../../../app/components/Usermessagechat";
const Chat = () => {
    return (
        <>
            <UsHeader />
            <DashboradMenu />
            <UserMessageCht />
            {/* <div className="Chat-wrp">
                <div className="container">
                    <div id="frame">
                        <div id="sidepanel">
                            <div id="profile">
                                <div className="wrap">
                                    <img id="profile-img" src={proifleimage} className="online" />
                                    <p _ngcontent-pbw-c29="">Mike Ross</p>
                                    <i _ngcontent-pbw-c29="" aria-hidden="true" class="fa fa-chevron-down expand-button"></i>
                                    <div _ngcontent-pbw-c29="" id="status-options">
                                        <ul _ngcontent-pbw-c29="">
                                            <li _ngcontent-pbw-c29="" id="status-online" class="active">
                                                <span _ngcontent-pbw-c29="" class="status-circle"></span>
                                                <p _ngcontent-pbw-c29="">Online</p>
                                            </li>
                                            <li _ngcontent-pbw-c29="" id="status-away">
                                                <span _ngcontent-pbw-c29="" class="status-circle"></span>
                                                <p _ngcontent-pbw-c29="">Away</p>
                                            </li>
                                            <li _ngcontent-pbw-c29="" id="status-busy">
                                                <span _ngcontent-pbw-c29="" class="status-circle"></span>
                                                <p _ngcontent-pbw-c29="">Busy</p>
                                            </li>
                                            <li _ngcontent-pbw-c29="" id="status-offline">
                                                <span _ngcontent-pbw-c29="" class="status-circle"></span>
                                                <p _ngcontent-pbw-c29="">Offline</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div _ngcontent-pbw-c29="" id="expanded">
                                        <label _ngcontent-pbw-c29="" for="twitter">
                                            <i _ngcontent-pbw-c29="" aria-hidden="true" class="fa fa-facebook fa-fw"></i>
                                        </label>
                                        <input _ngcontent-pbw-c29="" name="twitter" type="text" value="mikeross" />
                                        <label _ngcontent-pbw-c29="" for="twitter">
                                            <i _ngcontent-pbw-c29="" aria-hidden="true" class="fa fa-twitter fa-fw"></i>
                                        </label>
                                        <input _ngcontent-pbw-c29="" name="twitter" type="text" value="ross81" />
                                        <label _ngcontent-pbw-c29="" for="twitter">
                                            <i _ngcontent-pbw-c29="" aria-hidden="true" class="fa fa-instagram fa-fw"></i>
                                        </label>
                                        <input _ngcontent-pbw-c29="" name="twitter" type="text" value="mike.ross" />

                                    </div>
                                </div>
                            </div>
                            <div _ngcontent-pbw-c29="" id="search">
                                <label _ngcontent-pbw-c29="" for="">
                                    <i _ngcontent-pbw-c29="" aria-hidden="true" class="fa fa-search"></i>
                                </label>
                                <input _ngcontent-pbw-c29="" type="text" placeholder="Search contacts..." />
                            </div>
                            <div _ngcontent-pbw-c29="" id="contacts">
                                <ul _ngcontent-pbw-c29="">
                                    <li _ngcontent-pbw-c29="" class="contact">
                                        <div _ngcontent-pbw-c29="" class="wrap text-left">
                                            <span _ngcontent-pbw-c29="" class="contact-status online"></span>
                                            <img _ngcontent-pbw-c29="" src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
                                            <div _ngcontent-pbw-c29="" class="meta">
                                                <p _ngcontent-pbw-c29="" class="name">Louis Litt</p>
                                                <p _ngcontent-pbw-c29="" class="preview">You just got LITT up, Mike.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li _ngcontent-pbw-c29="" class="contact active">
                                        <div _ngcontent-pbw-c29="" class="wrap text-left">
                                            <span _ngcontent-pbw-c29="" class="contact-status busy"></span>
                                            <img _ngcontent-pbw-c29="" src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                            <div _ngcontent-pbw-c29="" class="meta">
                                                <p _ngcontent-pbw-c29="" class="name">Harvey Specter</p>
                                                <p _ngcontent-pbw-c29="" class="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li _ngcontent-pbw-c29="" class="contact">
                                        <div _ngcontent-pbw-c29="" class="wrap text-left">
                                            <span _ngcontent-pbw-c29="" class="contact-status away"></span>
                                            <img _ngcontent-pbw-c29="" src="http://emilcarlsson.se/assets/rachelzane.png" alt="" />
                                            <div _ngcontent-pbw-c29="" class="meta">
                                                <p _ngcontent-pbw-c29="" class="name">Rachel Zane</p>
                                                <p _ngcontent-pbw-c29="" class="preview">I was thinking that we could have chicken tonight, sounds good?</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li _ngcontent-pbw-c29="" class="contact">
                                        <div _ngcontent-pbw-c29="" class="wrap text-left">
                                            <span _ngcontent-pbw-c29="" class="contact-status online"></span>
                                            <img _ngcontent-pbw-c29="" src="http://emilcarlsson.se/assets/donnapaulsen.png" alt="" />
                                            <div _ngcontent-pbw-c29="" class="meta">
                                                <p _ngcontent-pbw-c29="" class="name">Donna Paulsen</p>
                                                <p _ngcontent-pbw-c29="" class="preview">Mike, I know everything! I'm Donna..</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div _ngcontent-pbw-c29="" id="bottom-bar">
                                <button _ngcontent-pbw-c29="" id="addcontact">
                                    <i _ngcontent-pbw-c29="" aria-hidden="true" class="fa fa-user-plus fa-fw"></i>
                                    <span _ngcontent-pbw-c29="">Add contact</span>
                                </button>
                                <button _ngcontent-pbw-c29="" id="settings">
                                    <i _ngcontent-pbw-c29="" aria-hidden="true" class="fa fa-cog fa-fw"></i>
                                    <span _ngcontent-pbw-c29="">Settings</span>
                                </button>
                            </div>
                        </div>

                        <div className="content">
                            <div _ngcontent-pbw-c29="" class="contact-profile">
                                <img _ngcontent-pbw-c29="" src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                <p _ngcontent-pbw-c29="">Harvey Specter</p>
                                <div _ngcontent-pbw-c29="" class="social-media">
                                    <i _ngcontent-pbw-c29="" aria-hidden="true" class="fa fa-facebook"></i>
                                    <i _ngcontent-pbw-c29="" aria-hidden="true" class="fa fa-twitter"></i>
                                    <i _ngcontent-pbw-c29="" aria-hidden="true" class="fa fa-instagram"></i>
                                </div>
                            </div>
                            <div _ngcontent-pbw-c29="" class="messages">
                                <ul _ngcontent-pbw-c29="">
                                    <li _ngcontent-pbw-c29="" class="sent text-left">
                                        <img _ngcontent-pbw-c29="" src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                                        <p _ngcontent-pbw-c29="">How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
                                    </li>
                                    <li _ngcontent-pbw-c29="" class="replies text-left">
                                        <img _ngcontent-pbw-c29="" src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                        <p _ngcontent-pbw-c29="">When you're backed against the wall, break the god damn thing down.</p>
                                    </li>
                                    <li _ngcontent-pbw-c29="" class="replies text-left">
                                        <img _ngcontent-pbw-c29="" src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                        <p _ngcontent-pbw-c29="">Excuses don't win championships.</p>
                                    </li>
                                    <li _ngcontent-pbw-c29="" class="sent text-left">
                                        <img _ngcontent-pbw-c29="" src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                                        <p _ngcontent-pbw-c29="">Oh yeah, did Michael Jordan tell you that?</p>
                                    </li>
                                    <li _ngcontent-pbw-c29="" class="replies text-left">
                                        <img _ngcontent-pbw-c29="" src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                        <p _ngcontent-pbw-c29="">No, I told him that.</p>
                                    </li>
                                    <li _ngcontent-pbw-c29="" class="replies text-left">
                                        <img _ngcontent-pbw-c29="" src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                        <p _ngcontent-pbw-c29="">What are your choices when someone puts a gun to your head?</p>
                                    </li>
                                    <li _ngcontent-pbw-c29="" class="sent text-left">
                                        <img _ngcontent-pbw-c29="" src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                                        <p _ngcontent-pbw-c29="">What are you talking about? You do what they say or they shoot you.</p>
                                    </li>
                                    <li _ngcontent-pbw-c29="" class="replies text-left">
                                        <img _ngcontent-pbw-c29="" src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                        <p _ngcontent-pbw-c29="">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
                                    </li>
                                </ul>
                            </div>
                            <div _ngcontent-pbw-c29="" class="message-input">
                                <div _ngcontent-pbw-c29="" class="wrap">
                                    <input _ngcontent-pbw-c29="" type="text" placeholder="Write your message..." />
                                    <i _ngcontent-pbw-c29="" aria-hidden="true" class="fa fa-paperclip attachment"></i>
                                    <button _ngcontent-pbw-c29="" class="submit">
                                        <i _ngcontent-pbw-c29="" aria-hidden="true" class="fa fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
export default Chat;