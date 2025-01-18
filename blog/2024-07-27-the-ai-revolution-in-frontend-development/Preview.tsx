const htmlCode = `
<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login Page</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap"
        rel="stylesheet"
      />
      <script src="https://unpkg.com/react/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/@babel/standalone@7.24.10/babel.min.js"></script>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://unpkg.com/dayjs/dayjs.min.js"></script>
      <script src="https://unpkg.com/antd/dist/antd.min.js"></script>
      <script src="https://unpkg.com/@ant-design/icons@5.3.7/dist/index.umd.min.js"></script>
    </head>
    <body class="bg-purple-100 font-sans">
      <div id="root"></div>
      <script type="text/babel">
        const { Form, Input, Button, Checkbox } = antd;
        const { UserOutlined, LockOutlined, GoogleOutlined } = icons;

        function Login() {
          return (
            <div className="flex items-center justify-center h-screen">
              <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <div className="mb-8">
                  <h1 className="text-2xl font-bold text-left">Login</h1>
                  <p className="text-gray-500 text-left">Hi, Welcome back 👋</p>
                </div>
                <Form
                  name="login_form"
                  className="login-form"
                  layout="vertical"
                >
                  <Form.Item>
                    <Button
                      type="default"
                      icon={<GoogleOutlined />}
                      size="large"
                      block
                    >
                      Login with Google
                    </Button>
                  </Form.Item>
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">
                        or Login with Email
                      </span>
                    </div>
                  </div>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: "Please input your Email!" }]}
                  >
                    <Input
                      prefix={<UserOutlined />}
                      placeholder="Email"
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, message: "Please input your Password!" }]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      type="password"
                      placeholder="Password"
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a className="float-right text-blue-500" href="#">
                      Forgot Password?
                    </a>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" block>
                      Login
                    </Button>
                  </Form.Item>
                  <div className="text-center">
                    <span>Not registered yet? </span>
                    <a href="#" className="text-blue-500">
                      Create an account
                    </a>
                  </div>
                </Form>
              </div>
            </div>
          );
        }

        function App() {
          return <Login />;
        }

        ReactDOM.render(<App />, document.getElementById("root"));
      </script>
    </body>
  </html>
`;

export default function Preview() {
  return (
    <iframe style={{ width: "100%", height: "700px" }} srcDoc={htmlCode} />
  );
}
