import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
    transform(stories: any, term: string): any {
         if  (!term) { return stories; }
         const solution = stories.filter(story => {
            if ( !story ) { return; }
           return  story.title.toLowerCase().indexOf(term.toLowerCase()) !== -1;
        });
        return solution;
    }
}
