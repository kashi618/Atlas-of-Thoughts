---
cssclasses:
  - cards
---

> [!tabbed]
>
> <label>Reading<input type="radio" name="test" /></label>
>
> > ```dataview
> > TABLE WITHOUT ID
> >	LibraryTitle as Book,
> >	("![10](" + LibraryCover +")") as Cover,
> >	LibraryAuthor as Author,
> >	LibraryStatus as Status
> > FROM "Library"
> > WHERE contains(LibraryStatus,"Reading")
> > SORT LibraryAuthor Asc
> >```
>
> <label>Finished<input type="radio" name="test" /></label>
>
> > ```dataview
> > TABLE WITHOUT ID
> >	LibraryTitle as Book,
> >	("![10](" + LibraryCover +")") as Cover,
> >	LibraryAuthor as Author,
> >	LibraryStatus as Status
> > FROM "Library"
> > WHERE contains(LibraryStatus,"Finished")
> > SORT LibraryAuthor Asc
> >```
>
> <label>On Hold<input type="radio" name="test" /></label>
>
> > ```dataview
> > TABLE WITHOUT ID
> >	LibraryTitle as Book,
> >	("![10](" + LibraryCover +")") as Cover,
> >	LibraryAuthor as Author,
> >	LibraryStatus as Status
> > FROM "Library"
> > WHERE contains(LibraryStatus,"OnHold")
> > SORT LibraryAuthor Asc
> >```
>
> <label>Planning<input type="radio" name="test" /></label>
> 
> > ```dataview
> > TABLE WITHOUT ID
> >	LibraryTitle as Book,
> >	("![10](" + LibraryCover +")") as Cover,
> >	LibraryAuthor as Author,
> >	LibraryStatus as Status
> > FROM "Library"
> > WHERE contains(LibraryStatus,"Planning")
> > SORT LibraryAuthor Asc
> >```
>
> <label>All<input type="radio" name="test" /></label>
> 
> > ```dataview
> > TABLE WITHOUT ID
> >	LibraryTitle as Book,
> >	("![10](" + LibraryCover +")") as Cover,
> >	LibraryAuthor as Author,
> >	LibraryStatus as Status
> > FROM "Library"
> > SORT LibraryAuthor Asc
> >```