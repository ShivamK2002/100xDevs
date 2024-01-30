import { atom, selector, useRecoilState } from "recoil";

export const myNetworkAtom = atom({
  key: "myNetworkAtom",
  default: 105,
});
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 10,
});
export const messageAtom = atom({
  key: "messagetom",
  default: 50,
});
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 1000,
});
export const finalValueSelector = selector({
  key: "finalValueSelector",
  get: ({ get }) => {
    const myNetworkAtomCount = get(myNetworkAtom);
    const messageAtomCount = get(messageAtom);
    const jobsAtomCount = get(jobsAtom);
    const notificationAtomCount = get(notificationAtom);
    return (
      myNetworkAtomCount +
      messageAtomCount +
      jobsAtomCount +
      notificationAtomCount
    );
  },
});
