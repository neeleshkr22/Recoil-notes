import { atom, selector } from "recoil";

export const networkAtom = atom({
    key:"networkAtom",
    default: 104
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default:0
});

export const notificationsAtom = atom({
    key:"notificationsAtom",
    default:12
})

export const messagingAtom  = atom({
    key : "messagingAtom",
    default:1
})

export const notifications = atom({
    key: "networknoti",
    default: {}
})

export const totalNotifications = selector({
    key: "totalNotifications",
    get: ({get})=>{
        const allNoti = get(notifications);
        return allNoti.network + 
        allNoti.jobsAtom + 
        allNoti.notifications+
        allNoti.messagingAtom

    }
})