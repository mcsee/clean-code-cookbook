export function sayHello(name: string): string {
  const lengthOfName = name.length;
-  const salutation = `How are you ${name}?, I see your name has ${lengthOfName} letters!`;
+  const salutation = `Hello ${name}, I see your name has ${lengthOfName} letters!`;
  return salutation;
} 