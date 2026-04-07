"# My-React-Native" 
- Cài đặt Android Studio và bật máy ảo Android Studio để chạy project
- Cài đặt dự án React Native với command: npx create-expo-app@latest
- Chạy dự án với command: expo start

- Nhấn a để chạy dự án trên máy ảo Android
- Nhấn i để chạy dự án trên máy ảo iOS

- Lưu ý không phải CSS mà là StyleSheet
- Parent and Child:
  - Parent: là View cha
  - Child: là View con
  - Nếu muốn thuộc tính bên trong Parent không bị Parent ảnh hưởng 
    thì phải đặt thuộc tính style cho Child
  - Ví dụ:
    <View style={styles.parent}>
    <View style={styles.child}>
        <Text>Hello World 4.1</Text>
    </View>
    </View>
    - Thì thuộc tính style cho Child phải đặt trong styles.child
    - Thì thuộc tính style cho Parent phải đặt trong styles.parent

- State: là một biến để lưu trữ dữ liệu của component

- Text Inputs : ô để nhập vào 

- Array : dùng map() render ra list
- ScrollView : dùng để vuốt lên vuốt xuống giao diện
- Flatlist

- Todo list P1: viết vào textbox bấm add thì nó hiển thị ra màn hình
- Todo list P2: TouchableOpacity + Pressable 
  :: Khi tap vào thì nó sẽ có hiệu ứng động, 
  Pressable là phiên bản sau của TouchableOpacity, 
  nếu muốn Pressable hiệu ứng như như TouchableOpacity thì cần thêm style vào.
  :: viết thêm function delete để khi tap vào thì nó xoá lun