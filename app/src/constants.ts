declare const SIYUAN_VERSION: string;
declare const NODE_ENV: string;

const _SIYUAN_VERSION = SIYUAN_VERSION;
const _NODE_ENV = NODE_ENV;

export abstract class Constants {
    public static readonly SIYUAN_VERSION: string = _SIYUAN_VERSION;
    public static readonly NODE_ENV: string = _NODE_ENV;
    public static readonly SIYUAN_APPID: string = Math.random().toString(36).substring(8);

    // 服务器地址
    public static readonly ASSETS_ADDRESS: string = "https://assets.b3logfile.com/siyuan/";
    public static readonly PROTYLE_CDN: string = "/stage/protyle";
    public static readonly UPLOAD_ADDRESS: string = "/upload";

    // drop 事件
    public static readonly SIYUAN_DROP_FILE: string = "application/siyuan-file";
    public static readonly SIYUAN_DROP_TAB: string = "application/siyuan-tab";
    public static readonly SIYUAN_DROP_EDITOR: string = "application/siyuan-editor";

    // 渲染进程调主进程
    public static readonly SIYUAN_CONFIG_THEME: string = "siyuan-config-theme";
    public static readonly SIYUAN_CONFIG_CLOSE: string = "siyuan-config-close";
    public static readonly SIYUAN_CONFIG_TRAY: string = "siyuan-config-tray";
    public static readonly SIYUAN_CONFIG_CLOSETRAY: string = "siyuan-config-closetray";
    public static readonly SIYUAN_QUIT: string = "siyuan-quit";
    public static readonly SIYUAN_HOTKEY: string = "siyuan-hotkey";
    public static readonly SIYUAN_INIT: string = "siyuan-init";
    public static readonly SIYUAN_OPENURL: string = "siyuan-openurl";
    public static readonly SIYUAN_SAVE_CLOSE: string = "siyuan-save-close";

    // size
    public static readonly SIZE_TOOLBAR_HEIGHT: number = 30;
    public static readonly SIZE_GET = 36;
    public static readonly SIZE_GET_MAX = 102400;
    public static readonly SIZE_UNDO = 64;
    public static readonly SIZE_TITLE = 512;
    public static readonly SIZE_EDITOR_WIDTH = 760;

    // ws callback
    public static readonly CB_MOUNT_HELP = "cb-mount-help";
    public static readonly CB_MOUNT_REMOVE = "cb-mount-remove";
    public static readonly CB_GET_APPEND = "cb-get-append"; // 向下滚动加载
    public static readonly CB_GET_BEFORE = "cb-get-before"; // 向上滚动加载
    public static readonly CB_GET_UNCHANGEID = "cb-get-unchangeid"; // 上下滚动，定位时不修改 blockid
    public static readonly CB_GET_HL = "cb-get-hl"; // 高亮
    public static readonly CB_GET_FOCUS = "cb-get-focus"; // 光标定位
    public static readonly CB_GET_FOCUSFIRST = "cb-get-focusfirst"; // 动态定位到第一个块
    public static readonly CB_GET_SETID = "cb-get-setid"; // 重置 blockid
    public static readonly CB_GET_ALL = "cb-get-all"; // 获取所有块
    public static readonly CB_GET_UNUNDO = "cb-get-unundo"; // 不需要记录历史
    public static readonly CB_GET_SCROLL = "cb-get-scroll"; // 滚动到指定位置
    public static readonly CB_GET_CONTEXT = "cb-get-context"; // 包含上下文
    public static readonly CB_GET_HTML = "cb-get-html"; // 直接渲染，不需要再 /api/block/getDocInfo，否则搜索表格无法定位

    // localstorage
    public static readonly LOCAL_SEARCHEDATA = "local-searchedata";
    public static readonly LOCAL_SEARCHETABDATA = "local-searchetabdata";
    public static readonly LOCAL_DOCINFO = "local-docinfo";
    public static readonly LOCAL_DAILYNOTEID = "local-dailynoteid";
    public static readonly LOCAL_HISTORYNOTEID = "local-historynoteid";
    public static readonly LOCAL_CODELANG = "local-codelang";
    public static readonly LOCAL_FONTSTYLES = "local-fontstyles";
    public static readonly LOCAL_EXPORTPDF = "local-exportpdf";
    public static readonly LOCAL_EXPORTWORD = "local-exportword";
    public static readonly LOCAL_BAZAAR = "local-bazaar";

    // timeout
    public static readonly TIMEOUT_DBLCLICK = 190;
    public static readonly TIMEOUT_SEARCH = 300;
    public static readonly TIMEOUT_INPUT = 256;
    public static readonly TIMEOUT_BLOCKLOAD = 300;

    // help path
    public static readonly HELP_PATH = {
        zh_CN: "20210808180117-czj9bvb",
        zh_CHT: "20211226090932-5lcq56f",
        en_US: "20210808180117-6v0mkxr",
        fr_FR: "20210808180117-6v0mkxr",
    };
    public static readonly HELP_START_PATH = {
        zh_CN: "20200812220555-lj3enxa",
        zh_CHT: "20211226115423-d5z1joq",
        en_US: "20200923234011-ieuun1p",
        fr_FR: "20200923234011-ieuun1p",
    };

    // "⌘", "⇧", "⌥", "⌃"
    // "⌘A", "⌘X", "⌘C", "⌘V", "⌘/", "⌘↑", "⌘↓", "⇧↑", "⇧↓", "⇧→", "⇧←", "⇧⇥", "⇧⌘⇥", "⌃⇥", "⌃⌘⇥", "⇧⌘→", "⇧⌘←", "⌘Home", "⌘End", "⇧↩", "↩", "PageUp", "PageDown", "⌫", "⌦" 不可自定义
    public static readonly SIYUAN_KEYMAP: IKeymap = {
        general: {
            syncNow: {default: "F9", custom: "F9"},
            enterBack: {default: "⌥←", custom: "⌥←"},
            enter: {default: "⌥→", custom: "⌥→"},
            goForward: {default: "⌘]", custom: "⌘]"},
            goBack: {default: "⌘[", custom: "⌘["},
            newFile: {default: "⌘N", custom: "⌘N"},
            search: {default: "⌘F", custom: "⌘F"},
            globalSearch: {default: "⌘P", custom: "⌘P"},
            stickSearch: {default: "⇧⌘F", custom: "⇧⌘F"},
            replace: {default: "⌘R", custom: "⌘R"},
            closeTab: {default: "⌘W", custom: "⌘W"},
            fileTree: {default: "⌥1", custom: "⌥1"},
            outline: {default: "⌥2", custom: "⌥2"},
            bookmark: {default: "⌥3", custom: "⌥3"},
            tag: {default: "⌥4", custom: "⌥4"},
            dailyNote: {default: "⌥5", custom: "⌥5"},
            inbox: {default: "⌥6", custom: "⌥6"},
            backlinks: {default: "⌥7", custom: "⌥7"},
            graphView: {default: "⌥8", custom: "⌥8"},
            globalGraph: {default: "⌥9", custom: "⌥9"},
            config: {default: "⌥P", custom: "⌥P"},
            history: {default: "⌥H", custom: "⌥H"},
            toggleWin: {default: "⌥M", custom: "⌥M"},
            lockScreen: {default: "⌥N", custom: "⌥N"},
            move: {default: "", custom: ""},
            selectOpen1: {default: "", custom: ""},
        },
        editor: {
            general: {
                copyID: {default: "", custom: ""},
                netImg2LocalAsset: {default: "", custom: ""},
                hLayout: {default: "", custom: ""},
                vLayout: {default: "", custom: ""},
                refBottom: {default: "⇧>", custom: "⇧>"},
                refRight: {default: "⌥.", custom: "⌥."},
                refPopover: {default: "⌥⌘.", custom: "⌥⌘."},
                refTab: {default: "⇧⌘.", custom: "⇧⌘."},
                attr: {default: "⌥⌘A", custom: "⌥⌘A"},
                refresh: {default: "F5", custom: "F5"},
                copyBlockRef: {default: "⇧⌘C", custom: "⇧⌘C"},
                copyProtocol: {default: "⇧⌘H", custom: "⇧⌘H"},
                copyBlockEmbed: {default: "⇧⌘E", custom: "⇧⌘E"},
                copyHPath: {default: "⇧⌘P", custom: "⇧⌘P"},
                pasteAsPlainText: {default: "⇧⌘V", custom: "⇧⌘V"},
                undo: {default: "⌘Z", custom: "⌘Z"},
                redo: {default: "⌘Y", custom: "⌘Y"},
                rename: {default: "F2", custom: "F2"},
                newNameFile: {default: "F3", custom: "F3"},
                newContentFile: {default: "F4", custom: "F4"},
                showInFolder: {default: "⌥A", custom: "⌥A"},
                outline: {default: "⌥O", custom: "⌥O"},
                backlinks: {default: "⌥B", custom: "⌥B"},
                graphView: {default: "⌥G", custom: "⌥G"},
                fullscreen: {default: "⌥Y", custom: "⌥Y"},
                alignLeft: {default: "⌥L", custom: "⌥L"},
                alignCenter: {default: "⌥C", custom: "⌥C"},
                alignRight: {default: "⌥R", custom: "⌥R"},
                wysiwyg: {default: "⌥⌘7", custom: "⌥⌘7"},
                preview: {default: "⌥⌘9", custom: "⌥⌘9"},
                insertBefore: {default: "⇧⌘B", custom: "⇧⌘B"},
                insertAfter: {default: "⇧⌘A", custom: "⇧⌘A"},
                jumpToParentNext: {default: "⇧⌘N", custom: "⇧⌘N"},
                moveToUp: {default: "⇧⌘↑", custom: "⇧⌘↑"},
                moveToDown: {default: "⇧⌘↓", custom: "⇧⌘↓"},
            },
            insert: {
                font: {default: "⌥⌘X", custom: "⌥⌘X"},
                lastUsed: {default: "⌥X", custom: "⌥X"},
                blockRef: {default: "⌥[", custom: "⌥["},
                kbd: {default: "⌘'", custom: "⌘'"},
                sup: {default: "⌘H", custom: "⌘H"},
                sub: {default: "⌘J", custom: "⌘J"},
                bold: {default: "⌘B", custom: "⌘B"},
                "inline-math": {default: "⌘M", custom: "⌘M"},
                underline: {default: "⌘U", custom: "⌘U"},
                italic: {default: "⌘I", custom: "⌘I"},
                mark: {default: "⌘E", custom: "⌘E"},
                tag: {default: "⌘T", custom: "⌘T"},
                strike: {default: "⌘D", custom: "⌘D"},
                "inline-code": {default: "⌘G", custom: "⌘G"},
                link: {default: "⌘K", custom: "⌘K"},
                check: {default: "⌘L", custom: "⌘L"},
                table: {default: "⌘O", custom: "⌘O"},
                code: {default: "⇧⌘K", custom: "⇧⌘K"},
            },
            heading: {
                heading1: {default: "⌥⌘1", custom: "⌥⌘1"},
                heading2: {default: "⌥⌘2", custom: "⌥⌘2"},
                heading3: {default: "⌥⌘3", custom: "⌥⌘3"},
                heading4: {default: "⌥⌘4", custom: "⌥⌘4"},
                heading5: {default: "⌥⌘5", custom: "⌥⌘5"},
                heading6: {default: "⌥⌘6", custom: "⌥⌘6"},
            },
            list: {
                indent: {default: "⇥", custom: "⇥"},
                outdent: {default: "⇧⇥", custom: "⇧⇥"},
                checkToggle: {default: "⌘↩", custom: "⌘↩"},
            },
            table: {
                insertRowAbove: {default: "⇧⌘T", custom: "⇧⌘T"},
                insertRowBelow: {default: "⇧⌘D", custom: "⇧⌘D"},
                insertColumnLeft: {default: "⇧⌘L", custom: "⇧⌘L"},
                insertColumnRight: {default: "⇧⌘R", custom: "⇧⌘R"},
                moveToUp: {default: "⌥⌘T", custom: "⌥⌘T"},
                moveToDown: {default: "⌥⌘B", custom: "⌥⌘B"},
                moveToLeft: {default: "⌥⌘L", custom: "⌥⌘L"},
                moveToRight: {default: "⌥⌘R", custom: "⌥⌘R"},
                "delete-row": {default: "⌘-", custom: "⌘-"},
                "delete-column": {default: "⇧⌘-", custom: "⇧⌘-"}
            }
        }
    };

    public static readonly SIYUAN_EMPTY_LAYOUT: Record<string, unknown> = {
        hideDock: false,
        layout: {
            "direction": "tb",
            "size": "0px",
            "type": "normal",
            "instance": "Layout",
            "children": [{
                "direction": "lr",
                "size": "0px",
                "type": "top",
                "instance": "Layout",
                "children": [{
                    "instance": "Wnd",
                    "children": []
                }, {
                    "instance": "Wnd",
                    "resize": "lr",
                    "children": []
                }]
            }, {
                "direction": "lr",
                "resize": "tb",
                "size": "auto",
                "type": "normal",
                "instance": "Layout",
                "children": [{
                    "direction": "tb",
                    "size": "0px",
                    "type": "left",
                    "instance": "Layout",
                    "children": [{
                        "instance": "Wnd",
                        "children": []
                    }, {
                        "instance": "Wnd",
                        "resize": "tb",
                        "children": []
                    }]
                }, {
                    "direction": "lr",
                    "resize": "lr",
                    "size": "auto",
                    "type": "center",
                    "instance": "Layout",
                    "children": [{"instance": "Wnd", "children": [{"instance": "Tab", "children": []}]}]
                }, {
                    "direction": "tb",
                    "size": "0px",
                    "resize": "lr",
                    "type": "right",
                    "instance": "Layout",
                    "children": [{
                        "instance": "Wnd",
                        "children": []
                    }, {
                        "instance": "Wnd",
                        "resize": "tb",
                        "children": []
                    }]
                }]
            }, {
                "direction": "lr",
                "size": "0px",
                "resize": "tb",
                "type": "bottom",
                "instance": "Layout",
                "children": [{
                    "instance": "Wnd",
                    "children": []
                }, {
                    "instance": "Wnd",
                    "resize": "lr",
                    "children": []
                }]
            }]
        },
        top: [],
        bottom: [],
        left: [
            [{
                type: "file",
                size: {width: 240, height: 0},
                show: true,
                icon: "iconFiles",
                hotkeyLangId: "fileTree",
            }, {
                type: "outline",
                size: {width: 240, height: 0},
                show: false,
                icon: "iconAlignCenter",
                hotkeyLangId: "outline",
            }, {
                type: "inbox",
                size: {width: 252, height: 0},
                show: false,
                icon: "iconInbox",
                hotkeyLangId: "inbox",
            }], [{
                type: "bookmark",
                size: {width: 240, height: 0},
                show: false,
                icon: "iconBookmark",
                hotkeyLangId: "bookmark",
            }, {
                type: "tag",
                size: {width: 240, height: 0},
                show: false,
                icon: "iconTags",
                hotkeyLangId: "tag",
            }]
        ],
        right: [
            [{
                type: "graph",
                size: {width: 360, height: 0},
                show: false,
                icon: "iconGraph",
                hotkeyLangId: "graphView",
            }, {
                type: "globalGraph",
                size: {width: 360, height: 0},
                show: false,
                icon: "iconGlobalGraph",
                hotkeyLangId: "globalGraph",
            }], [{
                type: "backlink",
                size: {width: 360, height: 0},
                show: false,
                icon: "iconLink",
                hotkeyLangId: "backlinks",
            }]
        ]
    };

    // image
    public static readonly SIYUAN_IMAGE_VIP: string = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<path fill="#ffd00f" d="M2.288 12.643l23.487 12.853c0.286 0.153 0.477 0.45 0.477 0.791 0 0.082-0.011 0.161-0.032 0.237l0.001-0.006c-0.119 0.395-0.479 0.678-0.905 0.678-0.004 0-0.009-0-0.013-0h-19.439c-0.958 0-1.766-0.684-1.885-1.595l-1.691-12.956z"></path>
<path fill="#ffd00f" d="M29.676 12.643l-1.691 12.957c-0.119 0.911-0.927 1.594-1.884 1.594h-19.442c-0.004 0-0.009 0-0.013 0-0.425 0-0.785-0.281-0.903-0.668l-0.002-0.007c-0.019-0.070-0.031-0.15-0.031-0.232 0-0.341 0.191-0.638 0.472-0.788l0.005-0.002 23.487-12.853z"></path>
<path fill="#ffe668" d="M15.413 8.369l10.394 15.921c0.378 0.579 0.407 1.317 0.076 1.924-0.328 0.591-0.948 0.985-1.66 0.985-0 0-0.001 0-0.001 0h-17.617c-0.694 0-1.331-0.378-1.661-0.985-0.144-0.26-0.229-0.569-0.229-0.899 0-0.382 0.114-0.736 0.31-1.033l-0.004 0.007 10.394-15.921z"></path>
<path fill="#ffdd4e" d="M15.396 8.403l11.659 15.921c0.401 0.579 0.432 1.317 0.081 1.924-0.361 0.594-1.005 0.985-1.741 0.985-0.008 0-0.017-0-0.025-0h-9.344l-0.63-18.83z"></path>
<path fill="#ffd00f" d="M13.868 6.478c0 0.946 0.767 1.712 1.712 1.712s1.712-0.767 1.712-1.712v0c0-0.945-0.766-1.712-1.712-1.712s-1.712 0.766-1.712 1.712v0zM28.577 10.818c0 0.945 0.766 1.712 1.712 1.712s1.712-0.766 1.712-1.712v0c0-0.945-0.766-1.712-1.712-1.712s-1.712 0.766-1.712 1.712v0zM0 10.822c0 0.945 0.766 1.712 1.712 1.712s1.712-0.766 1.712-1.712v0c0-0.945-0.766-1.712-1.712-1.712s-1.712 0.766-1.712 1.712v0z"></path>
</svg>`;
    public static readonly SIYUAN_IMAGE_FILE: string = "1f4c4";
    public static readonly SIYUAN_IMAGE_NOTE: string = "1f5c3";
    public static readonly SIYUAN_IMAGE_FOLDER: string = "1f4d1";

    // assets
    public static readonly SIYUAN_ASSETS_IMAGE: string[] = [".apng", ".ico", ".cur", ".jpg", ".jpe", ".jpeg", ".jfif", ".pjp", ".pjpeg", ".png", ".gif", ".webp", ".bmp", ".svg"];
    public static readonly SIYUAN_ASSETS_AUDIO: string[] = [".mp3", ".wav", ".ogg", ".m4a"];
    public static readonly SIYUAN_ASSETS_VIDEO: string[] = [".mov", ".weba", ".mkv", ".mp4", ".webm"];
    public static readonly SIYUAN_ASSETS_EXTS: string[] = [".pdf"].concat(Constants.SIYUAN_ASSETS_IMAGE).concat(Constants.SIYUAN_ASSETS_AUDIO).concat(Constants.SIYUAN_ASSETS_VIDEO);

    // protyle
    public static readonly SIYUAN_CONFIG_APPEARANCE_DARK_CODE: string[] = ["a11y-dark", "agate", "an-old-hope", "androidstudio",
        "arta", "atom-one-dark", "atom-one-dark-reasonable", "base16/3024", "base16/apathy", "base16/apprentice", "base16/ashes", "base16/atelier-cave", "base16/atelier-dune",
        "base16/atelier-estuary", "base16/atelier-forest", "base16/atelier-heath", "base16/atelier-lakeside", "base16/atelier-plateau", "base16/atelier-savanna", "base16/atelier-seaside", "base16/atelier-sulphurpool",
        "base16/atlas", "base16/bespin", "base16/black-metal", "base16/black-metal-bathory", "base16/black-metal-burzum", "base16/black-metal-dark-funeral", "base16/black-metal-gorgoroth", "base16/black-metal-immortal", "base16/black-metal-khold", "base16/black-metal-marduk", "base16/black-metal-mayhem", "base16/black-metal-nile", "base16/black-metal-venom", "base16/brewer", "base16/bright", "base16/brogrammer",
        "base16/brush-trees-dark", "base16/chalk", "base16/circus", "base16/classic-dark", "base16/codeschool", "base16/colors", "base16/danqing", "base16/darcula", "base16/dark-violet",
        "base16/darkmoss", "base16/darktooth", "base16/decaf", "base16/default-dark", "base16/dracula", "base16/edge-dark", "base16/eighties", "base16/embers", "base16/equilibrium-dark",
        "base16/equilibrium-gray-dark", "base16/espresso", "base16/eva", "base16/eva-dim", "base16/flat", "base16/framer", "base16/gigavolt", "base16/google-dark", "base16/grayscale-dark", "base16/green-screen", "base16/gruvbox-dark-hard", "base16/gruvbox-dark-medium",
        "base16/gruvbox-dark-pale", "base16/gruvbox-dark-soft", "base16/hardcore", "base16/harmonic16-dark", "base16/heetch-dark", "base16/helios", "base16/hopscotch", "base16/horizon-dark", "base16/humanoid-dark", "base16/ia-dark", "base16/icy-dark", "base16/ir-black", "base16/isotope",
        "base16/kimber", "base16/london-tube", "base16/macintosh", "base16/marrakesh", "base16/materia", "base16/material", "base16/material-darker", "base16/material-palenight", "base16/material-vivid",
        "base16/mellow-purple", "base16/mocha", "base16/monokai", "base16/nebula", "base16/nord", "base16/nova", "base16/ocean", "base16/oceanicnext", "base16/onedark", "base16/outrun-dark",
        "base16/papercolor-dark", "base16/paraiso", "base16/pasque", "base16/phd", "base16/pico", "base16/pop", "base16/porple", "base16/qualia", "base16/railscasts", "base16/rebecca",
        "base16/ros-pine", "base16/ros-pine-moon", "base16/sandcastle", "base16/seti-ui", "base16/silk-dark", "base16/snazzy", "base16/solar-flare", "base16/solarized-dark", "base16/spacemacs", "base16/summercamp", "base16/summerfruit-dark",
        "base16/synth-midnight-terminal-dark", "base16/tango", "base16/tender", "base16/tomorrow-night", "base16/twilight", "base16/unikitty-dark", "base16/vulcan",
        "base16/windows-10", "base16/windows-95", "base16/windows-high-contrast", "base16/windows-nt", "base16/woodland", "base16/xcode-dusk", "base16/zenburn", "codepen-embed", "dark",
        "devibeans", "far", "felipec", "github-dark", "github-dark-dimmed", "gml", "gradient-dark", "hybrid", "ir-black", "isbl-editor-dark", "kimbie-dark", "lioshi",
        "monokai", "monokai-sublime", "night-owl", "nnfx-dark", "nord", "obsidian", "paraiso-dark", "pojoaque", "qtcreator-dark", "rainbow", "shades-of-purple", "srcery", "stackoverflow-dark",
        "sunburst", "tomorrow-night-blue", "tomorrow-night-bright", "tokyo-night-dark", "vs2015", "xt256"
    ];
    public static readonly SIYUAN_CONFIG_APPEARANCE_LIGHT_CODE: string[] = ["ant-design",
        "a11y-light", "arduino-light", "ascetic", "atom-one-light", "base16/atelier-cave-light",
        "base16/atelier-dune-light", "base16/atelier-estuary-light", "base16/atelier-forest-light", "base16/atelier-heath-light",
        "base16/atelier-lakeside-light", "base16/atelier-plateau-light", "base16/atelier-savanna-light", "base16/atelier-seaside-light", "base16/atelier-sulphurpool-light", "base16/brush-trees",
        "base16/classic-light", "base16/cupcake", "base16/cupertino", "base16/default-light", "base16/dirtysea", "base16/edge-light", "base16/equilibrium-gray-light", "base16/equilibrium-light",
        "base16/fruit-soda", "base16/github", "base16/google-light", "base16/grayscale-light", "base16/gruvbox-light-hard", "base16/gruvbox-light-medium", "base16/gruvbox-light-soft",
        "base16/harmonic16-light", "base16/heetch-light", "base16/humanoid-light", "base16/horizon-light", "base16/ia-light", "base16/material-lighter", "base16/mexico-light",
        "base16/one-light", "base16/papercolor-light", "base16/ros-pine-dawn", "base16/sagelight", "base16/shapeshifter",
        "base16/silk-light", "base16/solar-flare-light", "base16/solarized-light", "base16/summerfruit-light", "base16/synth-midnight-terminal-light", "base16/tomorrow",
        "base16/unikitty-light", "base16/windows-10-light", "base16/windows-95-light", "base16/windows-high-contrast-light", "brown-paper", "base16/windows-nt-light",
        "color-brewer", "docco", "foundation", "github", "googlecode", "gradient-light", "grayscale", "idea", "intellij-light", "isbl-editor-light", "kimbie-light",
        "lightfair", "magula", "mono-blue", "nnfx-light", "paraiso-light", "purebasic", "qtcreator-light", "routeros", "school-book",
        "stackoverflow-light", "tokyo-night-light", "vs", "xcode", "default"];
    public static readonly ZWSP: string = "\u200b";
    public static readonly INLINE_TYPE: string[] = ["link", "bold", "italic", "underline", "strike", "mark", "sup", "sub", "tag", "inline-code", "inline-math"];
    public static readonly BLOCK_HINT_KEYS: string[] = ["((", "[[", "（（", "【【"];
    public static readonly BLOCK_HINT_CLOSE_KEYS: IObject = {"((": "))", "[[": "]]", "（（": "））", "【【": "】】"};
    public static readonly CODE_LANGUAGES: string[] = [
        // 同名
        "js", "ts", "html", "toml", "c#", "bat",
        // common
        "bash", "c", "csharp", "cpp", "css", "diff", "go", "xml", "json", "java", "javascript", "kotlin", "less", "lua", "makefile", "markdown", "objectivec", "php", "php-template", "perl", "plaintext", "python", "python-repl", "r", "ruby", "rust", "scss", "sql", "shell", "swift", "ini", "typescript", "vbnet", "yaml", "properties", "1c", "armasm", "avrasm", "actionscript", "ada", "angelscript", "accesslog", "apache", "applescript", "arcade", "arduino", "asciidoc", "aspectj", "abnf", "autohotkey", "autoit", "awk", "basic", "bnf", "dos", "brainfuck", "cal", "cmake", "csp", "cos", "capnproto", "ceylon", "clean", "clojure", "clojure-repl", "coffeescript", "coq", "crystal", "d", "dns", "dart", "delphi", "dts", "django", "dockerfile", "dust", "erb", "elixir", "elm", "erlang", "erlang-repl", "excel", "ebnf", "fsharp", "fix", "flix", "fortran", "gcode", "gams", "gauss", "glsl", "gml", "gherkin", "golo", "gradle", "groovy", "haml", "hsp", "http", "handlebars", "haskell", "haxe", "hy", "irpf90", "isbl", "inform7", "x86asm", "jboss-cli", "julia", "julia-repl", "ldif", "llvm", "lsl", "latex", "lasso", "leaf", "lisp", "livecodeserver", "livescript", "mel", "mipsasm", "matlab", "maxima", "mercury", "axapta", "routeros", "mizar", "mojolicious", "monkey", "moonscript", "n1ql", "nsis", "nestedtext", "nginx", "nim", "nix", "node-repl", "ocaml", "openscad", "ruleslanguage", "oxygene", "pf", "parser3", "pony", "pgsql", "powershell", "processing", "prolog", "protobuf", "puppet", "purebasic", "profile", "q", "qml", "reasonml", "rib", "rsl", "roboconf", "sas", "sml", "sqf", "step21", "scala", "scheme", "scilab", "smali", "smalltalk", "stan", "stata", "stylus", "subunit", "tp", "taggerscript", "tcl", "tap", "thrift", "twig", "vbscript", "vbscript-html", "vhdl", "vala", "verilog", "vim", "wasm", "mathematica", "wren", "xl", "xquery", "zephir", "crmsh", "dsconfig", "graphql",
        // third
        "yul", "solidity", "abap",
    ];
}
