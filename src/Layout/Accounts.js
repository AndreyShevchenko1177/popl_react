import { connect } from "react-redux";
import { useState, useRef } from "react";
import magniferImg from "../imimages/magnifier.png";
import label from "../imimages/account_card_image.png";
import link1 from "../imimages/links/1.png";
import link2 from "../imimages/links/2.png";
import link3 from "../imimages/links/3.png";
import link4 from "../imimages/links/4.png";
import link5 from "../imimages/links/5.png";
import editAccountCard from "../imimages/edit_account_card.png";


const PersonalData = ({ user = {}, isPersonal, callback }) => {

    if (typeof callback === 'function') {
        callback(isPersonal ? user.name : user.nameBusiness)
    }

    return (
        <div className={'personalData'}>

            <div className={'userAva'}>
                <img src={user.image} alt="user avatar" />
                <div className={'label'}>
                    <img src={label} alt="user avatar" />
                </div>
            </div>

            <div className={'nameContacts'}>
                <div>{isPersonal ? user.name : user.nameBusiness}</div>
                <div>{user.email}</div>
                <div>{isPersonal ? user.bio : user.bioBusiness}</div>
            </div>

        </div>
    )
}


const Links = ({ user = {}, isPersonal }) => {
    const links = [null, link1, link2, link3, link4, link5,]

    const Link = ({ ikon }) => <img src={links[ikon]} alt="link" />

    return (
        <div className="links">
            {(isPersonal ? user.publicIcons : user.businessIcons).map((ikon, i) => (<Link key={i} ikon={ikon} />))}
        </div>
    )
}

const ControlPanel = ({ setIsPersonal, isPersonal }) => {

    const personalCheckBoxRef = useRef(null);

    return (
        <div className={'control'}>

            <div>
                <img src={editAccountCard} alt="Edit" />
            </div>

            <div className={'rightPanel'}>

                <div className={'checkBox'}>
                    <label>
                        <input
                            type="checkbox"
                            ref={personalCheckBoxRef}
                            checked={isPersonal}
                            onChange={e => { setIsPersonal(e.target.checked); }}
                        ></input>
                        Personal
                    </label>
                </div>

                <div className={'checkBox'}>
                    <label>
                        <input type="checkbox" ></input>
                        Direct
                    </label>
                </div>

                <div className="counts">Connections</div>
                <div className="counts">Connections</div>
                <div className="counts">Connections</div>

            </div>

        </div>
    )
}

const UserItem = ({ user = {}, searchStr = '' }) => {

    const [isPersonal, setIsPersonal] = useState(false);



    const userName = useRef('')
    const getUserName = (name) => {
        userName.current = name
    }

    return (
        <>
            {userName.current.toLowerCase().includes(searchStr.toLowerCase()) &&
                < div className={'userItem'}>

                    <div>
                        <PersonalData user={user} isPersonal={isPersonal} callback={getUserName} />
                        <Links user={user} isPersonal={isPersonal} />
                    </div>

                    <ControlPanel setIsPersonal={setIsPersonal} isPersonal={isPersonal} />

                </div>}
        </>
    );
};


const SearchInput = ({ callback }) => {

    const [searchStr, setSearchStr] = useState('');

    return <>
        <div className="searchInput">
            <input
                value={searchStr}
                type="text"
                placeholder="Search"

                // onKeyUp={(e) => {
                //     if (e.key === "Enter" ){}
                // }}

                onChange={(e) => {
                    setSearchStr(e.target.value);
                    if (typeof callback === 'function') {
                        callback(e.target.value)
                    }
                }}
            />
            <img src={magniferImg} alt="magniferImg"></img>
        </div>
    </>
};


const Accounts = ({ usersArr = [] }) => {

    const [searchStr, sestSearchStr] = useState('')

    const callback = (searchstr) => {
        sestSearchStr(searchstr)
    }

    return <>
        <div className={'accounts'}>
            <div>Accounts</div>
            <SearchInput callback={callback} />

            {usersArr.map((user) => (
                <UserItem key={user.id} user={user} searchStr={searchStr} />
            ))}

        </div>
    </>


}

const CAccounts = connect((s) => ({ usersArr: s.usersData }), {})(Accounts);

export default CAccounts;
