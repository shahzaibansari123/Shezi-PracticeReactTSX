// // import { ReactNode } from "react";

// import { Dispatch, SetStateAction } from "react";

// // type Props = {
// //   heading: string;
// //   children: ReactNode;
// // };

// // const Box = ({ heading, children }: Props) => {
// //   return (
// //     <>
// //       <div>{heading} </div>
// //       {children}
// //     </>
// //   );
// // };

// // export default Box;

// // generice with react tsx

// // import { ReactNode } from "react";

// // type Props = {
// //   heading: string;
// //   children: ReactNode;
// // };

// type TextValue= string | number;

// const Box = <T extends TextValue>({label, value, setter}:{label:string, value: T, setter: Dispatch<SetStateAction<T>>}) => {
//   return (
//     <>
//     <form>
//       <label>{label}</label>
//       <input type='text' value={value} onChange={(e)=> {setter(e.target.value as T); console.log(value)}} />
//       <button type='submit'>Submit</button>
//     </form>

//     </>
//   );
// };

// export default Box;
