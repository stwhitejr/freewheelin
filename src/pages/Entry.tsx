import PhotoGallery from '../components/PhotoGallery';

export interface EntryProps {}

const Entry = (props: EntryProps) => {
  return (
    <div>
      <div>entry</div>
      <PhotoGallery />
    </div>
  );
};

export default Entry;
