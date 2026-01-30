interface Props {
  params: Promise<{ id: number; photoId: number }>;
}

const PhotoDetailPage = async ({ params }: Props) => {
  const { id, photoId } = await params;
  return (
    <div>
      PhotoDetailPage UserId:{id} PhotoId:{photoId}
    </div>
  );
};

export default PhotoDetailPage;
