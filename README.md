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
  - Nếu muốn thuộc tính bên trong Parent không bị Parent ảnh hưởng thì phải đặt thuộc tính style cho Child
  - Ví dụ:
    <View style={styles.parent}>
    <View style={styles.child}>
        <Text>Hello World 4.1</Text>
    </View>
    </View>
    - Thì thuộc tính style cho Child phải đặt trong styles.child
    - Thì thuộc tính style cho Parent phải đặt trong styles.parent

- State: là một biến để lưu trữ dữ liệu của component