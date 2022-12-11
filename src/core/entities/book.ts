import { randomUUID } from 'crypto';

interface BookProps {
  id?: string
  title: string
  description: string
}

export class Book {
  private props: BookProps;

  constructor(props: BookProps) {
    this.props = props;

    if (!this.props.id) {
      this.props.id = randomUUID();
    }
  }

  get id() {
    return this.props.id;
  }

  get title() {
    return this.props.title;
  }

  set title(newTitle: string) {
    this.props.title = newTitle;
  }

  get description() {
    return this.props.description;
  }

  set description(newDescription: string) {
    this.props.description = newDescription;
  }
}
