---
tags:
  - MobileSoftwareDevelopment
aliases:
---

## What are they?
When developing applications for android, either XML or Jetpack Compose is used.

## XML
Declarative markup language, used to define layouts, which is then inflated and used by java/kotlin to be turned into actual UI components.

**Pros**
- Separation of concerns. It makes it easier for two teams to collaborate independently, as UI is separate from Logic.
- Backwards compatibility. XML-based layouts are supported in older versions of android
- Tight coupling with the view hierarchy
- Rich Ecosystem

**Cons**
- Boilerplate Code
- Rigid UI designs. When adding a button for example, you may need to change lots of XML code.
- Performance overhead. Each time the XML needs to be inflated, to be used by Kotlin
- Limited flexibility for composable UI's

### XML Usecases
- Legacy projects
- Collaborate teams, due to separation oif concerns

## Jetpack Compose
Modern UI Toolkit, used to build UI's natively in kotlin, using a declarative programming model

**Pros**
- Declarative Kotlin-first approach
- Less boilerplate code
- Reactive and dynamic UI
- Easier for modularity and resuability
- Seamless animation support

**Cons**
- Learning curve for those used to XML
- Lack of mature tooling. Is still quite new
- Limited third-party libraries. Same issue as above
- Performance on older devices

### Jetpack Compose Usecases
Composable hierarchy
Somposable functions cal call other composables, building a hierarchical tree of UI components

**NOTE:**
```
Composable functions can call functions Composable
Composable functions can call Kotlin functions
Kotlin functions CANNOT call composable functions
```





# See Also
[[$ MSD]]
