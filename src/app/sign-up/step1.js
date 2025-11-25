// "use client";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
// import { ChevronLeft } from "../_icons/ChevronLeft";

// export default function StepOne({ next, formik }) {
//   const { values, handleChange, handleBlur, errors, touched, handleSubmit } =
//     formik;

//   return (
//     <div className="flex flex-col gap-6">
//       <Card className="overflow-hidden p-0 border-none shadow-none rounded-none">
//         <CardContent className="grid p-0">
//           <form
//             className="p-6 md:p-8"
//             onSubmit={(e) => {
//               e.preventDefault();
//               // formik setTouched({ email:true});
//               formik.validateForm().then((errors) => {
//                 if (!errors.email) {
//                   next();
//                 }
//               });
//             }}
//           >
//             <FieldGroup className="gap-6">
//               <Button variant="outline" size="icon" aria-label="Submit">
//                 <ChevronLeft />
//               </Button>
//               {/* title description */}

//               <div className="flex flex-col items-start gap-1 text-center">
//                 <h1 className="text-2xl font-bold">Create your account</h1>
//                 <p className="text-muted-foreground text-sm text-balance">
//                   Sign up to explore your favorite dishes.{""}
//                 </p>
//               </div>
//             </FieldGroup>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
