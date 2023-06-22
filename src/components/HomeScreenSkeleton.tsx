import { ScrollView } from 'react-native';
import Skeleton from './Skeleton';

export default function HomeScreenSkeleton({ width }: { width: number }) {
  return (
    <>
      <Skeleton
        width={width - 50}
        height={80}
        style={{ borderRadius: 10, marginTop: 10, marginHorizontal: 25 }}
      ></Skeleton>
      <Skeleton
        width={width - 100}
        height={30}
        style={{ borderRadius: 30, marginTop: 30, marginHorizontal: 25 }}
      ></Skeleton>
      <Skeleton
        width={width - 50}
        height={350}
        style={{ borderRadius: 10, marginTop: 10, marginHorizontal: 25 }}
      ></Skeleton>
      <Skeleton
        width={width - 100}
        height={30}
        style={{ borderRadius: 30, marginTop: 40, marginHorizontal: 25 }}
      ></Skeleton>
      <ScrollView
        horizontal={true}
        style={{ flexDirection: 'row', marginStart: 25 }}
        showsHorizontalScrollIndicator={false}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <Skeleton
            width={100}
            height={150}
            style={{ borderRadius: 30, marginTop: 10, marginEnd: 10 }}
            key={item}
          ></Skeleton>
        ))}
      </ScrollView>
    </>
  );
}
